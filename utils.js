// TransformX AI — Utility Functions

const TXUtils = {

  // ===== STORAGE =====
  storage: {
    get: (key) => {
      try {
        const val = localStorage.getItem('tx_' + key);
        return val ? JSON.parse(val) : null;
      } catch { return null; }
    },
    set: (key, val) => {
      try { localStorage.setItem('tx_' + key, JSON.stringify(val)); return true; }
      catch { return false; }
    },
    remove: (key) => { localStorage.removeItem('tx_' + key); },
    clear: () => {
      Object.keys(localStorage).filter(k => k.startsWith('tx_')).forEach(k => localStorage.removeItem(k));
    }
  },

  // ===== AUTH =====
  auth: {
    isLoggedIn: () => !!TXUtils.storage.get('user'),
    getUser: () => TXUtils.storage.get('user'),
    login: (userData) => {
      TXUtils.storage.set('user', userData);
      TXUtils.storage.set('last_login', Date.now());
    },
    logout: () => {
      TXUtils.storage.remove('user');
      window.location.href = 'index.html';
    },
    onboardingComplete: () => {
      const user = TXUtils.storage.get('user');
      return user && user.onboarding_complete === true;
    }
  },

  // ===== ROUTING =====
  route: (page) => {
    const pages = {
      'landing': 'index.html',
      'auth': 'auth.html',
      'onboarding': 'onboarding.html',
      'app': 'app.html'
    };
    window.location.href = pages[page] || page;
  },

  // ===== TOAST NOTIFICATIONS =====
  toast: {
    container: null,
    init: () => {
      if (!TXUtils.toast.container) {
        TXUtils.toast.container = document.createElement('div');
        TXUtils.toast.container.className = 'toast-container';
        document.body.appendChild(TXUtils.toast.container);
      }
    },
    show: (msg, type = 'info', duration = 3500) => {
      TXUtils.toast.init();
      const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-msg">${msg}</span>`;
      TXUtils.toast.container.appendChild(toast);
      setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
      }, duration);
    },
    success: (msg) => TXUtils.toast.show(msg, 'success'),
    error: (msg) => TXUtils.toast.show(msg, 'error'),
    warning: (msg) => TXUtils.toast.show(msg, 'warning'),
    info: (msg) => TXUtils.toast.show(msg, 'info'),
  },

  // ===== THEME =====
  theme: {
    get: () => TXUtils.storage.get('theme') || 'dark',
    set: (theme) => {
      TXUtils.storage.set('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    },
    toggle: () => {
      const current = TXUtils.theme.get();
      TXUtils.theme.set(current === 'dark' ? 'light' : 'dark');
      return current === 'dark' ? 'light' : 'dark';
    },
    apply: () => {
      const theme = TXUtils.theme.get();
      document.documentElement.setAttribute('data-theme', theme);
    }
  },

  // ===== DATE HELPERS =====
  date: {
    today: () => new Date().toISOString().split('T')[0],
    todayLabel: () => {
      const d = new Date();
      return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
    },
    format: (dateStr) => {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    },
    formatShort: (dateStr) => {
      if (!dateStr) return '';
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    },
    daysAgo: (dateStr) => {
      const diff = Date.now() - new Date(dateStr).getTime();
      const days = Math.floor(diff / 86400000);
      if (days === 0) return 'Today';
      if (days === 1) return 'Yesterday';
      return `${days} days ago`;
    },
    timeOfDay: () => {
      const h = new Date().getHours();
      if (h < 5) return { label: 'night', greeting: 'Working late' };
      if (h < 12) return { label: 'morning', greeting: 'Good morning' };
      if (h < 17) return { label: 'afternoon', greeting: 'Good afternoon' };
      if (h < 20) return { label: 'evening', greeting: 'Good evening' };
      return { label: 'night', greeting: 'Good night' };
    },
    getMonthDays: (year, month) => {
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrevMonth = new Date(year, month, 0).getDate();
      return { firstDay, daysInMonth, daysInPrevMonth };
    }
  },

  // ===== MATH / FITNESS =====
  fitness: {
    bmi: (weightKg, heightCm) => {
      const h = heightCm / 100;
      return (weightKg / (h * h)).toFixed(1);
    },
    bmiCategory: (bmi) => {
      if (bmi < 18.5) return { label: 'Underweight', color: '#3b82f6' };
      if (bmi < 25) return { label: 'Normal weight', color: '#10b981' };
      if (bmi < 30) return { label: 'Overweight', color: '#f59e0b' };
      return { label: 'Obese', color: '#ef4444' };
    },
    bmr: (weight, height, age, gender) => {
      // Mifflin-St Jeor Equation
      if (gender === 'Male') return Math.round(10 * weight + 6.25 * height - 5 * age + 5);
      if (gender === 'Female') return Math.round(10 * weight + 6.25 * height - 5 * age - 161);
      return Math.round(10 * weight + 6.25 * height - 5 * age - 78);
    },
    tdee: (bmr, activityLevel) => {
      const multipliers = {
        'Sedentary (desk job, no exercise)': 1.2,
        'Lightly Active (1-3 days/week)': 1.375,
        'Moderately Active (3-5 days/week)': 1.55,
        'Very Active (6-7 days/week)': 1.725,
        'Extremely Active (athlete, physical job)': 1.9,
      };
      const mult = multipliers[activityLevel] || 1.55;
      return Math.round(bmr * mult);
    },
    macros: (calories, goal) => {
      const goals = {
        'Fat Loss': { p: 0.35, c: 0.4, f: 0.25 },
        'Muscle Gain': { p: 0.3, c: 0.45, f: 0.25 },
        'Body Recomposition': { p: 0.35, c: 0.4, f: 0.25 },
        'General Health': { p: 0.25, c: 0.5, f: 0.25 },
        'Powerlifting': { p: 0.3, c: 0.5, f: 0.2 },
      };
      const m = goals[goal] || goals['General Health'];
      return {
        protein: Math.round((calories * m.p) / 4),
        carbs: Math.round((calories * m.c) / 4),
        fat: Math.round((calories * m.f) / 9),
      };
    },
    volumeKg: (sets) => sets.reduce((acc, s) => acc + (s.weight || 0) * (s.reps || 0), 0),
    lbsToKg: (lbs) => (lbs * 0.453592).toFixed(1),
    kgToLbs: (kg) => (kg * 2.20462).toFixed(1),
  },

  // ===== GAMIFICATION =====
  xp: {
    get: () => TXUtils.storage.get('xp') || 0,
    add: (amount, reason) => {
      const current = TXUtils.xp.get();
      const newTotal = current + amount;
      TXUtils.storage.set('xp', newTotal);
      TXUtils.toast.show(`+${amount} XP — ${reason}`, 'success', 2500);
      TXUtils.xp.checkLevelUp(current, newTotal);
      return newTotal;
    },
    getLevel: (xpAmount) => {
      const levels = window.TX_DATA ? TX_DATA.levels : [];
      let level = levels[0];
      for (const l of levels) {
        if (xpAmount >= l.xp_required) level = l;
      }
      return level;
    },
    getNextLevel: (xpAmount) => {
      const levels = window.TX_DATA ? TX_DATA.levels : [];
      for (let i = 0; i < levels.length - 1; i++) {
        if (xpAmount < levels[i + 1].xp_required) return levels[i + 1];
      }
      return null;
    },
    checkLevelUp: (oldXP, newXP) => {
      const oldLevel = TXUtils.xp.getLevel(oldXP);
      const newLevel = TXUtils.xp.getLevel(newXP);
      if (newLevel && oldLevel && newLevel.level > oldLevel.level) {
        setTimeout(() => {
          TXUtils.toast.show(`🎉 Level Up! You are now Level ${newLevel.level}: ${newLevel.name} ${newLevel.badge}`, 'success', 5000);
        }, 500);
      }
    }
  },

  // ===== ACHIEVEMENTS =====
  achievements: {
    getEarned: () => TXUtils.storage.get('achievements') || [],
    earn: (achievementId) => {
      const earned = TXUtils.achievements.getEarned();
      if (earned.includes(achievementId)) return false;
      earned.push(achievementId);
      TXUtils.storage.set('achievements', earned);
      const achievement = TX_DATA.achievements.find(a => a.id === achievementId);
      if (achievement) {
        TXUtils.toast.show(`🏆 Achievement Unlocked: ${achievement.name}!`, 'success', 4000);
        TXUtils.xp.add(achievement.xp, `Achievement: ${achievement.name}`);
      }
      return true;
    },
    isEarned: (id) => TXUtils.achievements.getEarned().includes(id),
  },

  // ===== STREAK =====
  streak: {
    get: () => TXUtils.storage.get('streak') || 0,
    getLastDate: () => TXUtils.storage.get('streak_last_date'),
    update: () => {
      const today = TXUtils.date.today();
      const lastDate = TXUtils.streak.getLastDate();
      const currentStreak = TXUtils.streak.get();
      if (lastDate === today) return currentStreak;
      const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      const newStreak = lastDate === yesterdayStr ? currentStreak + 1 : 1;
      TXUtils.storage.set('streak', newStreak);
      TXUtils.storage.set('streak_last_date', today);
      if (newStreak === 7) TXUtils.achievements.earn('a004');
      if (newStreak === 30) TXUtils.achievements.earn('a005');
      return newStreak;
    }
  },

  // ===== WATER TRACKER =====
  water: {
    getLog: (date) => {
      const logs = TXUtils.storage.get('water_logs') || {};
      return logs[date] || 0;
    },
    log: (date, glasses) => {
      const logs = TXUtils.storage.get('water_logs') || {};
      logs[date] = glasses;
      TXUtils.storage.set('water_logs', logs);
    },
    addGlass: (date) => {
      const current = TXUtils.water.getLog(date);
      const newAmount = Math.min(current + 1, 12);
      TXUtils.water.log(date, newAmount);
      return newAmount;
    },
    removeGlass: (date) => {
      const current = TXUtils.water.getLog(date);
      const newAmount = Math.max(current - 1, 0);
      TXUtils.water.log(date, newAmount);
      return newAmount;
    }
  },

  // ===== WORKOUT LOGGER =====
  workouts: {
    getHistory: () => TXUtils.storage.get('workout_history') || [],
    getTodayLog: () => {
      const today = TXUtils.date.today();
      const history = TXUtils.workouts.getHistory();
      return history.find(w => w.date === today) || null;
    },
    saveSession: (session) => {
      const history = TXUtils.workouts.getHistory();
      const idx = history.findIndex(w => w.id === session.id);
      if (idx >= 0) { history[idx] = session; } else { history.unshift(session); }
      TXUtils.storage.set('workout_history', history);
      TXUtils.streak.update();
      // Achievements
      if (history.length === 1) TXUtils.achievements.earn('a001');
      if (history.length === 7) TXUtils.achievements.earn('a002');
      if (history.length === 30) TXUtils.achievements.earn('a003');
      TXUtils.xp.add(50, 'Completed workout');
    },
    getPRs: () => TXUtils.storage.get('personal_records') || {},
    checkAndSetPR: (exerciseName, weight, reps) => {
      const prs = TXUtils.workouts.getPRs();
      const key = exerciseName.toLowerCase().replace(/\s+/g, '_');
      const estMax = weight * (1 + reps / 30); // Epley formula
      if (!prs[key] || estMax > prs[key].estimated_1rm) {
        prs[key] = { weight, reps, estimated_1rm: estMax, date: TXUtils.date.today() };
        TXUtils.storage.set('personal_records', prs);
        TXUtils.achievements.earn('a006');
        return true;
      }
      return false;
    }
  },

  // ===== NUTRITION LOGGER =====
  nutrition: {
    getLog: (date) => {
      const logs = TXUtils.storage.get('nutrition_logs') || {};
      return logs[date] || { meals: [], date };
    },
    saveLog: (date, log) => {
      const logs = TXUtils.storage.get('nutrition_logs') || {};
      logs[date] = log;
      TXUtils.storage.set('nutrition_logs', logs);
    },
    addFood: (date, mealType, foodData, quantity) => {
      const log = TXUtils.nutrition.getLog(date);
      if (!log.meals) log.meals = [];
      let meal = log.meals.find(m => m.type === mealType);
      if (!meal) {
        meal = { type: mealType, items: [] };
        log.meals.push(meal);
      }
      const multiplier = quantity / foodData.serving;
      meal.items.push({
        ...foodData,
        qty: quantity,
        logged_calories: Math.round(foodData.calories * multiplier),
        logged_protein: Math.round(foodData.protein * multiplier * 10) / 10,
        logged_carbs: Math.round(foodData.carbs * multiplier * 10) / 10,
        logged_fat: Math.round(foodData.fat * multiplier * 10) / 10,
        logged_at: new Date().toISOString(),
        item_id: Date.now()
      });
      TXUtils.nutrition.saveLog(date, log);
      return log;
    },
    getTotals: (log) => {
      let cals = 0, prot = 0, carbs = 0, fat = 0;
      (log.meals || []).forEach(m => {
        (m.items || []).forEach(item => {
          cals += item.logged_calories || 0;
          prot += item.logged_protein || 0;
          carbs += item.logged_carbs || 0;
          fat += item.logged_fat || 0;
        });
      });
      return {
        calories: Math.round(cals),
        protein: Math.round(prot * 10) / 10,
        carbs: Math.round(carbs * 10) / 10,
        fat: Math.round(fat * 10) / 10
      };
    }
  },

  // ===== MEASUREMENTS =====
  measurements: {
    getAll: () => TXUtils.storage.get('measurements') || [],
    log: (data) => {
      const measurements = TXUtils.measurements.getAll();
      measurements.push({ ...data, date: TXUtils.date.today(), timestamp: Date.now() });
      TXUtils.storage.set('measurements', measurements);
      if (measurements.length === 1) TXUtils.achievements.earn('a011');
      TXUtils.xp.add(30, 'Logged body measurements');
    },
    getLatest: () => {
      const all = TXUtils.measurements.getAll();
      return all.length ? all[all.length - 1] : null;
    }
  },

  // ===== JOURNAL =====
  journal: {
    getAll: () => TXUtils.storage.get('journal') || [],
    save: (entry) => {
      const entries = TXUtils.journal.getAll();
      const idx = entries.findIndex(e => e.id === entry.id);
      if (idx >= 0) { entries[idx] = entry; } else { entries.unshift(entry); }
      TXUtils.storage.set('journal', entries);
      if (entries.length === 10) TXUtils.achievements.earn('a013');
      return entry;
    },
    delete: (id) => {
      const entries = TXUtils.journal.getAll().filter(e => e.id !== id);
      TXUtils.storage.set('journal', entries);
    }
  },

  // ===== PHOTOS =====
  photos: {
    getAll: () => TXUtils.storage.get('progress_photos') || [],
    save: (photoData) => {
      const photos = TXUtils.photos.getAll();
      photos.unshift({ ...photoData, date: TXUtils.date.today(), id: Date.now() });
      TXUtils.storage.set('progress_photos', photos);
      if (photos.length === 1) TXUtils.achievements.earn('a012');
      TXUtils.xp.add(25, 'Added progress photo');
    }
  },

  // ===== CHARTS (Chart.js wrappers) =====
  charts: {
    activeCharts: {},
    destroy: (id) => {
      if (TXUtils.charts.activeCharts[id]) {
        TXUtils.charts.activeCharts[id].destroy();
        delete TXUtils.charts.activeCharts[id];
      }
    },
    line: (canvasId, labels, datasets, options = {}) => {
      TXUtils.charts.destroy(canvasId);
      const ctx = document.getElementById(canvasId);
      if (!ctx) return;
      const chart = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets: datasets.map(d => ({
          fill: d.fill !== undefined ? d.fill : true,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          backgroundColor: d.bgColor || 'rgba(99,102,241,0.1)',
          borderColor: d.color || '#6366f1',
          pointBackgroundColor: d.color || '#6366f1',
          ...d
        }))},
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: datasets.length > 1, labels: { color: '#9191a4', font: { family: 'Inter', size: 12 }, boxWidth: 12 } } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#525270', font: { size: 11 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#525270', font: { size: 11 } } }
          },
          ...options
        }
      });
      TXUtils.charts.activeCharts[canvasId] = chart;
      return chart;
    },
    bar: (canvasId, labels, datasets, options = {}) => {
      TXUtils.charts.destroy(canvasId);
      const ctx = document.getElementById(canvasId);
      if (!ctx) return;
      const chart = new Chart(ctx, {
        type: 'bar',
        data: { labels, datasets: datasets.map(d => ({
          borderRadius: 6,
          borderWidth: 0,
          backgroundColor: d.color || 'rgba(99,102,241,0.7)',
          ...d
        }))},
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#525270', font: { size: 11 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#525270', font: { size: 11 } } }
          },
          ...options
        }
      });
      TXUtils.charts.activeCharts[canvasId] = chart;
      return chart;
    },
    doughnut: (canvasId, labels, data, colors, options = {}) => {
      TXUtils.charts.destroy(canvasId);
      const ctx = document.getElementById(canvasId);
      if (!ctx) return;
      const chart = new Chart(ctx, {
        type: 'doughnut',
        data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 0, hoverOffset: 4 }] },
        options: {
          responsive: true, maintainAspectRatio: false, cutout: '70%',
          plugins: { legend: { display: false } },
          ...options
        }
      });
      TXUtils.charts.activeCharts[canvasId] = chart;
      return chart;
    }
  },

  // ===== FORM VALIDATION =====
  validate: {
    required: (val) => val && val.toString().trim() !== '',
    email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    minLength: (val, min) => val && val.toString().length >= min,
    number: (val) => !isNaN(parseFloat(val)) && isFinite(val),
    range: (val, min, max) => {
      const n = parseFloat(val);
      return !isNaN(n) && n >= min && n <= max;
    },
    showError: (inputEl, msg) => {
      inputEl.classList.add('input-error');
      const existing = inputEl.parentNode.querySelector('.error-msg');
      if (existing) existing.remove();
      const err = document.createElement('div');
      err.className = 'error-msg';
      err.textContent = msg;
      inputEl.parentNode.appendChild(err);
    },
    clearError: (inputEl) => {
      inputEl.classList.remove('input-error');
      const existing = inputEl.parentNode.querySelector('.error-msg');
      if (existing) existing.remove();
    }
  },

  // ===== DEBOUNCE =====
  debounce: (fn, delay = 300) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delay);
    };
  },

  // ===== MODAL HELPERS =====
  modal: {
    open: (id) => {
      const overlay = document.getElementById(id);
      if (overlay) overlay.classList.add('active');
    },
    close: (id) => {
      const overlay = document.getElementById(id);
      if (overlay) overlay.classList.remove('active');
    },
    closeAll: () => {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
  },

  // ===== PDF EXPORT (simple print-based) =====
  export: {
    print: (content, title) => {
      const win = window.open('', '_blank');
      win.document.write(`<!DOCTYPE html><html><head><title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
          h1 { color: #6366f1; } h2 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 8px; }
          table { width: 100%; border-collapse: collapse; margin: 16px 0; }
          th { background: #6366f1; color: white; padding: 10px; text-align: left; }
          td { padding: 8px 10px; border-bottom: 1px solid #eee; }
          tr:nth-child(even) { background: #f9f9ff; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 12px; }
        </style></head><body>${content}</body></html>`);
      win.document.close();
      win.print();
    },
    csv: (data, filename) => {
      if (!data.length) return;
      const headers = Object.keys(data[0]);
      const rows = [headers.join(','), ...data.map(row => headers.map(h => `"${row[h] || ''}"`).join(','))];
      const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename + '.csv';
      a.click(); URL.revokeObjectURL(url);
    }
  },

  // ===== NUMBER FORMATTING =====
  fmt: {
    num: (n) => {
      if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
      return n;
    },
    pct: (val, max) => max ? Math.min(Math.round((val / max) * 100), 100) : 0,
    round: (n, decimals = 1) => Math.round(n * Math.pow(10, decimals)) / Math.pow(10, decimals),
    duration: (seconds) => {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m}:${s.toString().padStart(2, '0')}`;
    },
    calories: (n) => n.toLocaleString('en-IN'),
  },

  // ===== INIT =====
  init: () => {
    TXUtils.theme.apply();
    // Close modals on overlay click
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) TXUtils.modal.closeAll();
    });
    // Keyboard ESC closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') TXUtils.modal.closeAll();
    });
  }
};

window.TXUtils = TXUtils;
document.addEventListener('DOMContentLoaded', TXUtils.init);

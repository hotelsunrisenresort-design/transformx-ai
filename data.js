// TransformX AI — All Static Data

const TX_DATA = {

  // ===== EXERCISES =====
  exercises: [
    // CHEST
    { id: 'ex001', name: 'Barbell Bench Press', category: 'Chest', muscle: 'Pectorals Major', secondary: 'Triceps, Front Delts', equipment: 'Barbell', difficulty: 'Intermediate', sets: 4, reps: '6-10', rest: 90, icon: '🏋️', instructions: ['Lie flat on bench, grip bar slightly wider than shoulders', 'Unrack bar, lower slowly to mid-chest (3 seconds)', 'Press explosively back to start', 'Keep feet flat, arch natural, wrists straight'], tips: 'Drive your shoulder blades together and down. Tuck elbows 45°, not flared.', muscles_worked: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps Brachii'] },
    { id: 'ex002', name: 'Push-Ups', category: 'Chest', muscle: 'Pectorals Major', secondary: 'Triceps, Core', equipment: 'Bodyweight', difficulty: 'Beginner', sets: 3, reps: '12-20', rest: 60, icon: '💪', instructions: ['Hands slightly wider than shoulders', 'Body in straight line from head to heels', 'Lower chest to floor (2-3 sec)', 'Press back to start, keeping core tight'], tips: 'Squeeze glutes and abs throughout. For harder version, elevate feet.', muscles_worked: ['Pectoralis Major', 'Triceps', 'Core'] },
    { id: 'ex003', name: 'Incline Dumbbell Press', category: 'Chest', muscle: 'Upper Pecs', secondary: 'Front Delts, Triceps', equipment: 'Dumbbells', difficulty: 'Intermediate', sets: 3, reps: '10-12', rest: 75, icon: '💪', instructions: ['Set bench to 30-45°', 'Hold dumbbells at chest level', 'Press up and slightly together', 'Lower with control (2-3 sec)'], tips: 'Incline target upper chest for a full, rounded look.', muscles_worked: ['Upper Pectoralis', 'Anterior Deltoid', 'Triceps'] },
    { id: 'ex004', name: 'Cable Chest Fly', category: 'Chest', muscle: 'Pectorals', secondary: 'Front Delts', equipment: 'Cable Machine', difficulty: 'Intermediate', sets: 3, reps: '12-15', rest: 60, icon: '🔗', instructions: ['Stand between cables at shoulder height', 'Step forward into split stance', 'Bring hands together with slight elbow bend', 'Open arms wide, feel the stretch'], tips: 'Cables keep constant tension. Squeeze at peak contraction.', muscles_worked: ['Pectoralis Major', 'Anterior Deltoid'] },
    { id: 'ex005', name: 'Dips', category: 'Chest', muscle: 'Lower Pecs', secondary: 'Triceps, Shoulders', equipment: 'Dip Bars', difficulty: 'Intermediate', sets: 3, reps: '8-12', rest: 90, icon: '⬇️', instructions: ['Grip bars, arms straight', 'Lean forward 15-30° for chest emphasis', 'Lower until elbows at 90°', 'Press back to start'], tips: 'Lean forward more = more chest. Upright = more triceps.', muscles_worked: ['Pectoralis Major', 'Triceps', 'Anterior Deltoid'] },

    // BACK
    { id: 'ex006', name: 'Pull-Ups', category: 'Back', muscle: 'Lats', secondary: 'Biceps, Rear Delts', equipment: 'Pull-Up Bar', difficulty: 'Intermediate', sets: 4, reps: '6-12', rest: 90, icon: '⬆️', instructions: ['Grip bar overhand, shoulder width', 'Hang with arms fully extended', 'Pull until chin above bar', 'Lower slowly (3 seconds)'], tips: 'Initiate pull by depressing shoulder blades first. Avoid kipping.', muscles_worked: ['Latissimus Dorsi', 'Biceps', 'Rear Deltoid', 'Rhomboids'] },
    { id: 'ex007', name: 'Deadlift', category: 'Back', muscle: 'Entire Posterior Chain', secondary: 'Glutes, Hamstrings, Traps', equipment: 'Barbell', difficulty: 'Advanced', sets: 4, reps: '3-6', rest: 180, icon: '🏋️', instructions: ['Bar over mid-foot, hip-width stance', 'Hinge at hips, grip outside legs', 'Neutral spine, chest up, push floor away', 'Lock out hips at top, lower with control'], tips: 'The king of all lifts. Build total body strength and mass.', muscles_worked: ['Erector Spinae', 'Glutes', 'Hamstrings', 'Lats', 'Traps'] },
    { id: 'ex008', name: 'Barbell Row', category: 'Back', muscle: 'Mid Back', secondary: 'Lats, Biceps', equipment: 'Barbell', difficulty: 'Intermediate', sets: 4, reps: '8-10', rest: 90, icon: '🏋️', instructions: ['Hinge to 45°, overhand grip', 'Pull bar to lower chest/upper abs', 'Squeeze shoulder blades at top', 'Lower under control'], tips: 'Lead with elbows, not hands. Think "elbow behind you".', muscles_worked: ['Rhomboids', 'Trapezius', 'Lats', 'Biceps'] },
    { id: 'ex009', name: 'Lat Pulldown', category: 'Back', muscle: 'Lats', secondary: 'Biceps, Rear Delts', equipment: 'Cable Machine', difficulty: 'Beginner', sets: 3, reps: '10-12', rest: 75, icon: '⬇️', instructions: ['Grip bar wider than shoulders', 'Lean back slightly, chest up', 'Pull bar to upper chest', 'Control the return fully'], tips: 'Great alternative to pull-ups for beginners. Focus on lat squeeze.', muscles_worked: ['Latissimus Dorsi', 'Biceps', 'Teres Major'] },
    { id: 'ex010', name: 'Seated Cable Row', category: 'Back', muscle: 'Mid Back', secondary: 'Lats, Biceps', equipment: 'Cable Machine', difficulty: 'Beginner', sets: 3, reps: '12-15', rest: 60, icon: '🔗', instructions: ['Sit with feet on pads', 'Grip handle, slight forward lean', 'Pull to abdomen, drive elbows back', 'Return forward with full extension'], tips: 'Keep chest up, dont round lower back.', muscles_worked: ['Rhomboids', 'Trapezius', 'Lats', 'Biceps'] },
    { id: 'ex011', name: 'Face Pulls', category: 'Back', muscle: 'Rear Delts', secondary: 'Rotator Cuff, Traps', equipment: 'Cable Machine', difficulty: 'Beginner', sets: 3, reps: '15-20', rest: 45, icon: '🎯', instructions: ['Set cable at head height with rope', 'Pull rope to face, elbows high', 'Externally rotate at end', 'Slow controlled return'], tips: 'Essential for shoulder health and posture. Everyone should do these.', muscles_worked: ['Posterior Deltoid', 'Rotator Cuff', 'Rhomboids', 'Trapezius'] },

    // SHOULDERS
    { id: 'ex012', name: 'Overhead Press', category: 'Shoulders', muscle: 'All 3 Deltoid Heads', secondary: 'Triceps, Traps, Core', equipment: 'Barbell', difficulty: 'Intermediate', sets: 4, reps: '6-10', rest: 90, icon: '⬆️', instructions: ['Grip slightly wider than shoulders', 'Bar at upper chest, elbows forward', 'Press overhead to lockout', 'Lower with control to collarbone'], tips: 'The best shoulder builder. Squeeze glutes for stability.', muscles_worked: ['All Deltoid Heads', 'Triceps', 'Upper Trapezius', 'Core'] },
    { id: 'ex013', name: 'Lateral Raises', category: 'Shoulders', muscle: 'Lateral Delts', secondary: 'Supraspinatus', equipment: 'Dumbbells', difficulty: 'Beginner', sets: 4, reps: '15-20', rest: 45, icon: '💪', instructions: ['Stand with dumbbells at sides', 'Raise arms to shoulder height', 'Slight forward lean and bend at elbow', 'Lower slowly (3 seconds)'], tips: 'Slow eccentrics build wider delts. Dont shrug or use momentum.', muscles_worked: ['Medial Deltoid', 'Supraspinatus'] },
    { id: 'ex014', name: 'Arnold Press', category: 'Shoulders', muscle: 'All Deltoid Heads', secondary: 'Triceps', equipment: 'Dumbbells', difficulty: 'Intermediate', sets: 3, reps: '10-12', rest: 75, icon: '💪', instructions: ['Start with dumbbells at chin, palms facing you', 'Rotate palms out as you press up', 'Full rotation by top', 'Reverse on the way down'], tips: 'Hits all 3 heads through rotation. Created by Arnold.', muscles_worked: ['All Deltoid Heads', 'Triceps'] },
    { id: 'ex015', name: 'Upright Row', category: 'Shoulders', muscle: 'Lateral Delts', secondary: 'Traps, Biceps', equipment: 'Barbell', difficulty: 'Intermediate', sets: 3, reps: '12-15', rest: 60, icon: '🏋️', instructions: ['Hold bar overhand, narrow grip', 'Pull bar straight up to chin', 'Keep bar close to body', 'Elbows above wrists at top'], tips: 'Wide grip is safer on shoulders. Stop at shoulder height.', muscles_worked: ['Lateral Deltoid', 'Trapezius', 'Biceps'] },

    // ARMS — BICEPS
    { id: 'ex016', name: 'Barbell Bicep Curl', category: 'Biceps', muscle: 'Biceps Brachii', secondary: 'Brachialis, Forearms', equipment: 'Barbell', difficulty: 'Beginner', sets: 4, reps: '8-12', rest: 60, icon: '💪', instructions: ['Shoulder width underhand grip', 'Curl bar to upper chest', 'Squeeze biceps at top', 'Lower fully (2-3 sec)'], tips: 'Full range of motion is key. No swinging.', muscles_worked: ['Biceps Brachii', 'Brachialis', 'Brachioradialis'] },
    { id: 'ex017', name: 'Hammer Curl', category: 'Biceps', muscle: 'Brachialis', secondary: 'Biceps, Forearms', equipment: 'Dumbbells', difficulty: 'Beginner', sets: 3, reps: '10-15', rest: 60, icon: '🔨', instructions: ['Neutral grip (thumbs up)', 'Curl straight up, dont rotate', 'Hold 1 sec at top', 'Lower fully'], tips: 'Builds arm thickness and forearm size. Great for overall arm size.', muscles_worked: ['Brachialis', 'Biceps Brachii', 'Brachioradialis'] },
    { id: 'ex018', name: 'Preacher Curl', category: 'Biceps', muscle: 'Biceps Brachii (short head)', secondary: 'Brachialis', equipment: 'EZ Bar / Dumbbells', difficulty: 'Beginner', sets: 3, reps: '10-12', rest: 60, icon: '💺', instructions: ['Rest upper arms on preacher bench', 'Underhand grip on EZ bar', 'Curl from full extension to top', 'Lower very slowly'], tips: 'Eliminates cheating. Great for peak isolation.', muscles_worked: ['Biceps Brachii', 'Brachialis'] },

    // ARMS — TRICEPS
    { id: 'ex019', name: 'Tricep Pushdown', category: 'Triceps', muscle: 'Triceps Brachii', secondary: 'Anconeus', equipment: 'Cable Machine', difficulty: 'Beginner', sets: 4, reps: '12-15', rest: 60, icon: '⬇️', instructions: ['Set cable high with bar/rope', 'Elbows tucked at sides', 'Push down to full extension', 'Control the return'], tips: 'Triceps are 2/3 of arm size. This is a staple movement.', muscles_worked: ['Triceps Brachii (all heads)'] },
    { id: 'ex020', name: 'Skull Crushers', category: 'Triceps', muscle: 'Triceps Long Head', secondary: 'All Tricep Heads', equipment: 'EZ Bar / Dumbbells', difficulty: 'Intermediate', sets: 3, reps: '10-12', rest: 75, icon: '💀', instructions: ['Lie on bench, EZ bar overhead', 'Lower bar toward forehead', 'Keep elbows pointing up', 'Extend to lockout'], tips: 'Great long head builder. Use controlled movement.', muscles_worked: ['Triceps Brachii (long head)', 'All heads'] },
    { id: 'ex021', name: 'Close Grip Bench', category: 'Triceps', muscle: 'Triceps Brachii', secondary: 'Pecs, Front Delts', equipment: 'Barbell', difficulty: 'Intermediate', sets: 3, reps: '8-12', rest: 75, icon: '🏋️', instructions: ['Narrow grip (shoulder width)', 'Lower to lower chest', 'Tuck elbows at sides', 'Press to lockout'], tips: 'Allows heavy loading for tricep mass.', muscles_worked: ['Triceps Brachii', 'Pectoralis'] },
    { id: 'ex022', name: 'Tricep Dips', category: 'Triceps', muscle: 'Triceps Brachii', secondary: 'Pecs, Shoulders', equipment: 'Parallel Bars', difficulty: 'Beginner', sets: 3, reps: '10-15', rest: 60, icon: '⬇️', instructions: ['Grip bars, keep torso upright', 'Lower until elbows 90°', 'Press back to full extension', 'Keep elbows close to body'], tips: 'Stay more upright to maximize tricep activation.', muscles_worked: ['Triceps Brachii', 'Anterior Deltoid'] },

    // LEGS
    { id: 'ex023', name: 'Barbell Squat', category: 'Legs', muscle: 'Quadriceps', secondary: 'Glutes, Hamstrings, Core', equipment: 'Barbell', difficulty: 'Intermediate', sets: 4, reps: '5-8', rest: 180, icon: '🏋️', instructions: ['Bar on upper traps, feet shoulder width', 'Brace core, sit back and down', 'Knees track over toes', 'Drive through heels to stand'], tips: 'The king of leg exercises. Build full lower body and core strength.', muscles_worked: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core', 'Erector Spinae'] },
    { id: 'ex024', name: 'Romanian Deadlift', category: 'Legs', muscle: 'Hamstrings', secondary: 'Glutes, Lower Back', equipment: 'Barbell / Dumbbells', difficulty: 'Intermediate', sets: 3, reps: '8-12', rest: 90, icon: '🏋️', instructions: ['Hold bar at hip, slight knee bend', 'Hinge at hips, push hips back', 'Lower until hamstring stretch', 'Drive hips forward to stand'], tips: 'Feel the hamstring stretch. Dont round your back.', muscles_worked: ['Hamstrings', 'Glutes', 'Erector Spinae'] },
    { id: 'ex025', name: 'Leg Press', category: 'Legs', muscle: 'Quadriceps', secondary: 'Glutes, Hamstrings', equipment: 'Leg Press Machine', difficulty: 'Beginner', sets: 4, reps: '10-15', rest: 90, icon: '🦵', instructions: ['Feet shoulder width on platform', 'Lower until 90° at knee', 'Press through whole foot', 'Dont lock knees at top'], tips: 'Safe way to add quad volume with heavy weight.', muscles_worked: ['Quadriceps', 'Glutes', 'Hamstrings'] },
    { id: 'ex026', name: 'Walking Lunges', category: 'Legs', muscle: 'Quadriceps', secondary: 'Glutes, Hamstrings, Balance', equipment: 'Dumbbells / Bodyweight', difficulty: 'Beginner', sets: 3, reps: '10-12 each', rest: 75, icon: '🚶', instructions: ['Hold dumbbells at sides', 'Step forward into lunge', 'Lower back knee toward ground', 'Drive front foot to step forward'], tips: 'Great for quads and glutes while improving balance.', muscles_worked: ['Quadriceps', 'Glutes', 'Hamstrings', 'Stabilizers'] },
    { id: 'ex027', name: 'Leg Curl', category: 'Legs', muscle: 'Hamstrings', secondary: 'Calves', equipment: 'Machine', difficulty: 'Beginner', sets: 3, reps: '12-15', rest: 60, icon: '🦵', instructions: ['Lie face down on machine', 'Pad on lower leg', 'Curl legs toward glutes', 'Lower slowly'], tips: 'Essential hamstring isolation. Works biceps femoris.', muscles_worked: ['Hamstrings', 'Gastrocnemius'] },
    { id: 'ex028', name: 'Calf Raises', category: 'Legs', muscle: 'Gastrocnemius', secondary: 'Soleus', equipment: 'Machine / Bodyweight', difficulty: 'Beginner', sets: 4, reps: '15-25', rest: 45, icon: '👟', instructions: ['Stand on edge of step', 'Lower heels fully (stretch)', 'Rise to full extension (squeeze)', 'Hold 1 sec at top'], tips: 'Calves need high reps and full range. Very slow lowering.', muscles_worked: ['Gastrocnemius', 'Soleus'] },
    { id: 'ex029', name: 'Bulgarian Split Squat', category: 'Legs', muscle: 'Quadriceps', secondary: 'Glutes, Hamstrings, Balance', equipment: 'Dumbbells / Barbell', difficulty: 'Advanced', sets: 3, reps: '8-10 each', rest: 90, icon: '🦵', instructions: ['Rear foot elevated on bench', 'Front foot far forward', 'Lower back knee toward ground', 'Drive through front heel'], tips: 'The best unilateral leg exercise for quad and glute development.', muscles_worked: ['Quadriceps', 'Glutes', 'Hamstrings'] },
    { id: 'ex030', name: 'Hip Thrust', category: 'Legs', muscle: 'Glutes', secondary: 'Hamstrings', equipment: 'Barbell / Bodyweight', difficulty: 'Intermediate', sets: 4, reps: '10-15', rest: 75, icon: '🍑', instructions: ['Upper back on bench, bar on hips', 'Feet flat, shoulder width', 'Drive hips up to lockout', 'Squeeze glutes at top, hold 1 sec'], tips: 'Best glute builder. Squeeze hard at the top.', muscles_worked: ['Gluteus Maximus', 'Hamstrings'] },

    // CORE
    { id: 'ex031', name: 'Plank', category: 'Core', muscle: 'Transverse Abdominis', secondary: 'All Core, Shoulders', equipment: 'Bodyweight', difficulty: 'Beginner', sets: 3, reps: '30-60 sec', rest: 45, icon: '⬛', instructions: ['Forearms on ground, body straight', 'Elbows under shoulders', 'Squeeze abs, glutes, quads', 'Breathe steadily'], tips: 'Quality over duration. Body should be perfectly rigid.', muscles_worked: ['Transverse Abdominis', 'Rectus Abdominis', 'Core', 'Shoulders'] },
    { id: 'ex032', name: 'Hanging Leg Raises', category: 'Core', muscle: 'Lower Abs', secondary: 'Hip Flexors, Lats', equipment: 'Pull-Up Bar', difficulty: 'Intermediate', sets: 3, reps: '10-15', rest: 60, icon: '⬆️', instructions: ['Hang from bar, arms straight', 'Raise legs to parallel or higher', 'Control the lowering phase', 'Avoid swinging'], tips: 'Posterior pelvic tilt is key. Round the lower back slightly at top.', muscles_worked: ['Rectus Abdominis (lower)', 'Hip Flexors'] },
    { id: 'ex033', name: 'Russian Twists', category: 'Core', muscle: 'Obliques', secondary: 'Rectus Abdominis', equipment: 'Bodyweight / Weight Plate', difficulty: 'Beginner', sets: 3, reps: '20-30 total', rest: 45, icon: '🔄', instructions: ['Sit with knees bent, lean back 45°', 'Feet off ground (harder)', 'Rotate side to side', 'Touch weight to ground each side'], tips: 'Great for rotational core strength and oblique definition.', muscles_worked: ['Obliques', 'Rectus Abdominis'] },
    { id: 'ex034', name: 'Ab Wheel Rollout', category: 'Core', muscle: 'Entire Core', secondary: 'Lats, Shoulders', equipment: 'Ab Wheel', difficulty: 'Advanced', sets: 3, reps: '8-12', rest: 60, icon: '⚙️', instructions: ['Kneel with ab wheel below shoulders', 'Roll out maintaining rigid body', 'Extend as far as possible', 'Pull back using abs'], tips: 'The most effective core exercise. Start from knees.', muscles_worked: ['Rectus Abdominis', 'Transverse Abdominis', 'Lats'] },
    { id: 'ex035', name: 'Cable Crunch', category: 'Core', muscle: 'Rectus Abdominis', secondary: 'Obliques', equipment: 'Cable Machine', difficulty: 'Beginner', sets: 3, reps: '15-20', rest: 45, icon: '🔗', instructions: ['Kneel below cable with rope', 'Bring elbows toward knees', 'Flex abs, dont pull with arms', 'Return slowly with control'], tips: 'Allows progressive overload for abs. Dont pull with triceps.', muscles_worked: ['Rectus Abdominis', 'Obliques'] },

    // CARDIO
    { id: 'ex036', name: 'Running (Steady State)', category: 'Cardio', muscle: 'Cardiovascular System', secondary: 'Legs, Endurance', equipment: 'None', difficulty: 'Beginner', sets: 1, reps: '20-45 min', rest: 0, icon: '🏃', instructions: ['Warm up with 5 min walk', 'Run at conversational pace', 'Land midfoot, not heel', 'Cool down with 5 min walk'], tips: '60-70% max heart rate for fat burning zone.', muscles_worked: ['Heart', 'Quadriceps', 'Hamstrings', 'Calves'] },
    { id: 'ex037', name: 'HIIT Sprint Intervals', category: 'Cardio', muscle: 'Full Body', secondary: 'Cardiovascular, Legs', equipment: 'None', difficulty: 'Advanced', sets: 8, reps: '20 sec on / 40 sec off', rest: 0, icon: '⚡', instructions: ['Warm up 5 minutes', 'Sprint at maximum effort 20 sec', 'Rest/walk 40 seconds', 'Repeat 8-12 rounds'], tips: 'HIIT burns more fat in less time. Best done fasted for fat loss.', muscles_worked: ['Full Body', 'Cardiovascular System'] },
    { id: 'ex038', name: 'Jump Rope', category: 'Cardio', muscle: 'Calves, Cardiovascular', secondary: 'Coordination, Shoulders', equipment: 'Jump Rope', difficulty: 'Beginner', sets: 5, reps: '1 min', rest: 30, icon: '🪢', instructions: ['Jump on balls of feet', 'Small jumps, 1-2 inches', 'Keep elbows close to body', 'Build to 10+ continuous minutes'], tips: 'Burns ~700-1000 kcal/hour. Amazing for conditioning and coordination.', muscles_worked: ['Calves', 'Cardiovascular', 'Shoulders', 'Coordination'] },
    { id: 'ex039', name: 'Cycling', category: 'Cardio', muscle: 'Legs, Cardiovascular', secondary: 'Low Impact', equipment: 'Cycle / Stationary Bike', difficulty: 'Beginner', sets: 1, reps: '30-60 min', rest: 0, icon: '🚴', instructions: ['Adjust seat to hip height', 'Maintain steady cadence (70-90 RPM)', 'Use resistance to build strength', 'Cool down last 5 minutes'], tips: 'Zero impact on joints. Great for fat loss without stress.', muscles_worked: ['Quadriceps', 'Hamstrings', 'Calves', 'Glutes'] },

    // MOBILITY / STRETCHING
    { id: 'ex040', name: 'Hip Flexor Stretch', category: 'Mobility', muscle: 'Iliopsoas', secondary: 'Quadriceps', equipment: 'Bodyweight', difficulty: 'Beginner', sets: 2, reps: '30-60 sec each', rest: 30, icon: '🧘', instructions: ['Kneeling lunge position', 'Push hips forward gently', 'Raise same-side arm overhead', 'Feel stretch in front of hip'], tips: 'Essential for desk workers and anyone who sits a lot.', muscles_worked: ['Iliopsoas', 'Rectus Femoris'] },
    { id: 'ex041', name: 'Thoracic Rotation', category: 'Mobility', muscle: 'Thoracic Spine', secondary: 'Erector Spinae', equipment: 'Bodyweight', difficulty: 'Beginner', sets: 2, reps: '10 each side', rest: 0, icon: '🔄', instructions: ['On all fours, hand behind head', 'Rotate elbow toward ceiling', 'Follow with eyes and head', 'Return to start'], tips: 'Improves posture, reduces back pain, increases shoulder mobility.', muscles_worked: ['Thoracic Extensors', 'External Obliques'] },
    { id: 'ex042', name: 'World Greatest Stretch', category: 'Mobility', muscle: 'Full Body', secondary: 'Hips, Thoracic, Hamstrings', equipment: 'Bodyweight', difficulty: 'Beginner', sets: 2, reps: '5 each side', rest: 30, icon: '🌍', instructions: ['Step into lunge, same hand inside foot', 'Rotate open toward ceiling', 'Reach forward, then back', 'Hamstring stretch variation'], tips: 'Best single mobility exercise. Do this as warm-up every session.', muscles_worked: ['Hip Flexors', 'Thoracic Spine', 'Hamstrings', 'Groin'] },
  ],

  // ===== WORKOUT PLANS =====
  workoutPlans: [
    {
      id: 'ppl', name: 'Push Pull Legs (PPL)', days: 6, goal: ['Muscle Gain', 'Bodybuilding'], level: 'Intermediate',
      schedule: [
        { day: 'Monday', name: 'Push', exercises: ['ex001', 'ex003', 'ex012', 'ex013', 'ex019', 'ex020'] },
        { day: 'Tuesday', name: 'Pull', exercises: ['ex006', 'ex008', 'ex009', 'ex015', 'ex016', 'ex017'] },
        { day: 'Wednesday', name: 'Legs', exercises: ['ex023', 'ex024', 'ex025', 'ex027', 'ex028', 'ex031'] },
        { day: 'Thursday', name: 'Push', exercises: ['ex002', 'ex004', 'ex005', 'ex014', 'ex013', 'ex021'] },
        { day: 'Friday', name: 'Pull', exercises: ['ex007', 'ex010', 'ex011', 'ex016', 'ex018', 'ex016'] },
        { day: 'Saturday', name: 'Legs', exercises: ['ex029', 'ex030', 'ex026', 'ex025', 'ex028', 'ex032'] },
        { day: 'Sunday', name: 'Rest', exercises: [] }
      ]
    },
    {
      id: 'upper-lower', name: 'Upper / Lower Split', days: 4, goal: ['Strength', 'Muscle Gain'], level: 'Beginner',
      schedule: [
        { day: 'Monday', name: 'Upper (Strength)', exercises: ['ex001', 'ex008', 'ex012', 'ex016', 'ex019'] },
        { day: 'Tuesday', name: 'Lower (Strength)', exercises: ['ex023', 'ex024', 'ex028', 'ex031'] },
        { day: 'Wednesday', name: 'Rest / Cardio', exercises: [] },
        { day: 'Thursday', name: 'Upper (Hypertrophy)', exercises: ['ex003', 'ex009', 'ex013', 'ex017', 'ex020'] },
        { day: 'Friday', name: 'Lower (Hypertrophy)', exercises: ['ex025', 'ex026', 'ex030', 'ex027', 'ex028'] },
        { day: 'Saturday', name: 'Rest', exercises: [] },
        { day: 'Sunday', name: 'Rest', exercises: [] }
      ]
    },
    {
      id: 'full-body', name: 'Full Body (3x/Week)', days: 3, goal: ['General Health', 'Fat Loss'], level: 'Beginner',
      schedule: [
        { day: 'Monday', name: 'Full Body A', exercises: ['ex001', 'ex006', 'ex023', 'ex012', 'ex016', 'ex031'] },
        { day: 'Tuesday', name: 'Rest / Cardio', exercises: [] },
        { day: 'Wednesday', name: 'Full Body B', exercises: ['ex002', 'ex009', 'ex025', 'ex013', 'ex017', 'ex033'] },
        { day: 'Thursday', name: 'Rest / Cardio', exercises: [] },
        { day: 'Friday', name: 'Full Body C', exercises: ['ex003', 'ex008', 'ex024', 'ex014', 'ex019', 'ex032'] },
        { day: 'Saturday', name: 'Active Recovery', exercises: [] },
        { day: 'Sunday', name: 'Rest', exercises: [] }
      ]
    },
    {
      id: 'calisthenics', name: 'Calisthenics Program', days: 4, goal: ['Calisthenics', 'Body Recomposition'], level: 'Beginner',
      schedule: [
        { day: 'Monday', name: 'Push Day', exercises: ['ex002', 'ex005', 'ex022', 'ex013', 'ex034'] },
        { day: 'Tuesday', name: 'Pull Day', exercises: ['ex006', 'ex011', 'ex016', 'ex031', 'ex032'] },
        { day: 'Wednesday', name: 'Rest', exercises: [] },
        { day: 'Thursday', name: 'Legs & Core', exercises: ['ex026', 'ex030', 'ex028', 'ex031', 'ex033', 'ex040'] },
        { day: 'Friday', name: 'Full Body', exercises: ['ex002', 'ex006', 'ex026', 'ex031', 'ex042'] },
        { day: 'Saturday', name: 'Mobility', exercises: ['ex040', 'ex041', 'ex042'] },
        { day: 'Sunday', name: 'Rest', exercises: [] }
      ]
    }
  ],

  // ===== FOODS (Indian + International) =====
  foods: [
    // PROTEINS
    { id: 'f001', name: 'Chicken Breast (cooked)', icon: '🍗', category: 'Protein', calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, serving: 100, unit: 'g' },
    { id: 'f002', name: 'Eggs (whole)', icon: '🥚', category: 'Protein', calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, serving: 100, unit: 'g' },
    { id: 'f003', name: 'Egg Whites', icon: '🥚', category: 'Protein', calories: 52, protein: 11, carbs: 0.7, fat: 0.2, fiber: 0, serving: 100, unit: 'g' },
    { id: 'f004', name: 'Paneer (Indian Cottage Cheese)', icon: '🧀', category: 'Protein', calories: 265, protein: 18, carbs: 3.6, fat: 20, fiber: 0, serving: 100, unit: 'g' },
    { id: 'f005', name: 'Whey Protein (1 scoop)', icon: '🥛', category: 'Supplement', calories: 120, protein: 24, carbs: 3, fat: 1.5, fiber: 0, serving: 30, unit: 'g' },
    { id: 'f006', name: 'Salmon (cooked)', icon: '🐟', category: 'Protein', calories: 208, protein: 28, carbs: 0, fat: 10, fiber: 0, serving: 100, unit: 'g' },
    { id: 'f007', name: 'Tuna (canned in water)', icon: '🐟', category: 'Protein', calories: 116, protein: 26, carbs: 0, fat: 1, fiber: 0, serving: 100, unit: 'g' },
    { id: 'f008', name: 'Greek Yogurt', icon: '🥛', category: 'Dairy', calories: 100, protein: 17, carbs: 6, fat: 0.7, fiber: 0, serving: 170, unit: 'g' },
    { id: 'f009', name: 'Cottage Cheese (low fat)', icon: '🧀', category: 'Dairy', calories: 98, protein: 11, carbs: 3.4, fat: 4.3, fiber: 0, serving: 100, unit: 'g' },
    { id: 'f010', name: 'Chicken Thigh (skinless)', icon: '🍗', category: 'Protein', calories: 177, protein: 26, carbs: 0, fat: 7, fiber: 0, serving: 100, unit: 'g' },

    // INDIAN PROTEINS
    { id: 'f011', name: 'Dal (Masoor/Red Lentil)', icon: '🫘', category: 'Indian', calories: 116, protein: 9, carbs: 20, fat: 0.4, fiber: 8, serving: 100, unit: 'g cooked' },
    { id: 'f012', name: 'Dal (Chana/Chickpea)', icon: '🫘', category: 'Indian', calories: 164, protein: 9, carbs: 27, fat: 2.6, fiber: 8, serving: 100, unit: 'g cooked' },
    { id: 'f013', name: 'Dal (Moong)', icon: '🫘', category: 'Indian', calories: 105, protein: 7.5, carbs: 18.5, fat: 0.4, fiber: 7.5, serving: 100, unit: 'g cooked' },
    { id: 'f014', name: 'Dal (Toor/Pigeon Pea)', icon: '🫘', category: 'Indian', calories: 119, protein: 7.5, carbs: 21, fat: 0.4, fiber: 5.7, serving: 100, unit: 'g cooked' },
    { id: 'f015', name: 'Rajma (Kidney Beans)', icon: '🫘', category: 'Indian', calories: 127, protein: 8.7, carbs: 22.8, fat: 0.5, fiber: 7.4, serving: 100, unit: 'g cooked' },
    { id: 'f016', name: 'Chole (Chickpeas cooked)', icon: '🫘', category: 'Indian', calories: 164, protein: 8.9, carbs: 27, fat: 2.6, fiber: 7.6, serving: 100, unit: 'g' },
    { id: 'f017', name: 'Soya Chunks (dry)', icon: '🟡', category: 'Indian', calories: 345, protein: 52, carbs: 33, fat: 0.5, fiber: 13, serving: 100, unit: 'g dry' },
    { id: 'f018', name: 'Chicken Curry (homestyle)', icon: '🍛', category: 'Indian', calories: 187, protein: 15, carbs: 8, fat: 10, fiber: 1, serving: 200, unit: 'g' },

    // CARBS & GRAINS
    { id: 'f019', name: 'White Rice (cooked)', icon: '🍚', category: 'Carbs', calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4, serving: 100, unit: 'g cooked' },
    { id: 'f020', name: 'Brown Rice (cooked)', icon: '🍚', category: 'Carbs', calories: 112, protein: 2.3, carbs: 24, fat: 0.9, fiber: 1.8, serving: 100, unit: 'g cooked' },
    { id: 'f021', name: 'Roti / Chapati (1 piece)', icon: '🫓', category: 'Indian', calories: 71, protein: 2.5, carbs: 15, fat: 0.4, fiber: 2, serving: 40, unit: 'g' },
    { id: 'f022', name: 'Paratha (plain)', icon: '🫓', category: 'Indian', calories: 176, protein: 4, carbs: 25, fat: 7, fiber: 2, serving: 80, unit: 'g' },
    { id: 'f023', name: 'Oats (rolled, dry)', icon: '🥣', category: 'Carbs', calories: 389, protein: 17, carbs: 66, fat: 7, fiber: 11, serving: 100, unit: 'g dry' },
    { id: 'f024', name: 'Sweet Potato (cooked)', icon: '🍠', category: 'Carbs', calories: 86, protein: 1.6, carbs: 20, fat: 0.1, fiber: 3, serving: 100, unit: 'g' },
    { id: 'f025', name: 'Banana', icon: '🍌', category: 'Fruit', calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6, serving: 118, unit: 'g (1 medium)' },
    { id: 'f026', name: 'Bread (whole wheat, 1 slice)', icon: '🍞', category: 'Carbs', calories: 81, protein: 4, carbs: 15, fat: 1.1, fiber: 1.9, serving: 30, unit: 'g' },
    { id: 'f027', name: 'Pasta (cooked)', icon: '🍝', category: 'Carbs', calories: 158, protein: 5.8, carbs: 31, fat: 0.9, fiber: 1.8, serving: 100, unit: 'g cooked' },
    { id: 'f028', name: 'Poha (flat rice, cooked)', icon: '🍚', category: 'Indian', calories: 180, protein: 3.5, carbs: 38, fat: 1.5, fiber: 1, serving: 150, unit: 'g cooked' },
    { id: 'f029', name: 'Upma (rava, cooked)', icon: '🥣', category: 'Indian', calories: 160, protein: 4, carbs: 28, fat: 4.5, fiber: 2, serving: 150, unit: 'g' },
    { id: 'f030', name: 'Idli (1 piece)', icon: '⚪', category: 'Indian', calories: 39, protein: 1.9, carbs: 8, fat: 0.2, fiber: 0.3, serving: 30, unit: 'g' },
    { id: 'f031', name: 'Dosa (plain)', icon: '🥞', category: 'Indian', calories: 168, protein: 3.5, carbs: 28, fat: 5, fiber: 1, serving: 100, unit: 'g' },

    // FATS
    { id: 'f032', name: 'Avocado', icon: '🥑', category: 'Fats', calories: 160, protein: 2, carbs: 9, fat: 15, fiber: 7, serving: 100, unit: 'g' },
    { id: 'f033', name: 'Almonds', icon: '🌰', category: 'Nuts', calories: 579, protein: 21, carbs: 22, fat: 50, fiber: 12, serving: 100, unit: 'g' },
    { id: 'f034', name: 'Peanuts / Groundnuts', icon: '🥜', category: 'Nuts', calories: 567, protein: 26, carbs: 16, fat: 49, fiber: 8.5, serving: 100, unit: 'g' },
    { id: 'f035', name: 'Peanut Butter', icon: '🥜', category: 'Fats', calories: 588, protein: 25, carbs: 20, fat: 50, fiber: 6, serving: 100, unit: 'g' },
    { id: 'f036', name: 'Olive Oil (1 tbsp)', icon: '🫙', category: 'Fats', calories: 119, protein: 0, carbs: 0, fat: 14, fiber: 0, serving: 14, unit: 'g' },
    { id: 'f037', name: 'Ghee (1 tbsp)', icon: '🧈', category: 'Indian', calories: 112, protein: 0, carbs: 0, fat: 12.7, fiber: 0, serving: 13, unit: 'g' },
    { id: 'f038', name: 'Cashews', icon: '🌰', category: 'Nuts', calories: 553, protein: 18, carbs: 30, fat: 44, fiber: 3.3, serving: 100, unit: 'g' },
    { id: 'f039', name: 'Walnuts', icon: '🌰', category: 'Nuts', calories: 654, protein: 15, carbs: 14, fat: 65, fiber: 6.7, serving: 100, unit: 'g' },

    // VEGETABLES
    { id: 'f040', name: 'Spinach (cooked)', icon: '🥬', category: 'Vegetable', calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.4, serving: 100, unit: 'g' },
    { id: 'f041', name: 'Broccoli (cooked)', icon: '🥦', category: 'Vegetable', calories: 35, protein: 2.4, carbs: 7.2, fat: 0.4, fiber: 3.3, serving: 100, unit: 'g' },
    { id: 'f042', name: 'Palak Paneer', icon: '🥬', category: 'Indian', calories: 235, protein: 12, carbs: 10, fat: 16, fiber: 3, serving: 200, unit: 'g' },
    { id: 'f043', name: 'Methi / Fenugreek Leaves', icon: '🌿', category: 'Indian', calories: 49, protein: 4.4, carbs: 6, fat: 0.9, fiber: 3.7, serving: 100, unit: 'g' },
    { id: 'f044', name: 'Cucumber', icon: '🥒', category: 'Vegetable', calories: 16, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5, serving: 100, unit: 'g' },
    { id: 'f045', name: 'Tomato', icon: '🍅', category: 'Vegetable', calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, serving: 100, unit: 'g' },
    { id: 'f046', name: 'Mixed Vegetables (stir fry)', icon: '🥗', category: 'Vegetable', calories: 77, protein: 3, carbs: 15, fat: 1, fiber: 4.5, serving: 200, unit: 'g' },

    // DAIRY
    { id: 'f047', name: 'Milk (full fat)', icon: '🥛', category: 'Dairy', calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, fiber: 0, serving: 100, unit: 'ml' },
    { id: 'f048', name: 'Milk (toned, 1.5%)', icon: '🥛', category: 'Dairy', calories: 46, protein: 3.2, carbs: 4.8, fat: 1.5, fiber: 0, serving: 100, unit: 'ml' },
    { id: 'f049', name: 'Curd / Dahi (plain)', icon: '🥛', category: 'Indian', calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3, fiber: 0, serving: 100, unit: 'g' },
    { id: 'f050', name: 'Lassi (sweet)', icon: '🥛', category: 'Indian', calories: 127, protein: 4.5, carbs: 21, fat: 3, fiber: 0, serving: 250, unit: 'ml' },
  ],

  // ===== MEAL PLANS =====
  mealPlans: [
    {
      id: 'mp001', name: 'Indian Muscle Gain (2500 kcal)', type: 'Non-Vegetarian', calories: 2500, protein: 185, carbs: 280, fat: 65,
      meals: [
        { name: 'Breakfast (7 AM)', foods: [{ id: 'f023', qty: 80, note: '80g oats' }, { id: 'f005', qty: 30, note: '1 scoop whey' }, { id: 'f025', qty: 118, note: '1 banana' }], calories: 515 },
        { name: 'Mid-Morning (10 AM)', foods: [{ id: 'f002', qty: 300, note: '5 whole eggs scrambled' }, { id: 'f026', qty: 60, note: '2 whole wheat bread' }], calories: 545 },
        { name: 'Lunch (1 PM)', foods: [{ id: 'f001', qty: 200, note: '200g chicken breast' }, { id: 'f020', qty: 200, note: '200g brown rice' }, { id: 'f041', qty: 100, note: 'broccoli side' }], calories: 630 },
        { name: 'Pre-Workout (4 PM)', foods: [{ id: 'f025', qty: 118, note: '1 banana' }, { id: 'f033', qty: 30, note: 'handful almonds' }], calories: 263 },
        { name: 'Dinner (7 PM)', foods: [{ id: 'f001', qty: 150, note: '150g chicken' }, { id: 'f011', qty: 200, note: '1 cup dal' }, { id: 'f021', qty: 120, note: '3 rotis' }], calories: 553 }
      ]
    },
    {
      id: 'mp002', name: 'Indian Vegetarian Cut (1800 kcal)', type: 'Vegetarian', calories: 1800, protein: 130, carbs: 200, fat: 50,
      meals: [
        { name: 'Breakfast (7 AM)', foods: [{ id: 'f023', qty: 60, note: '60g oats' }, { id: 'f049', qty: 150, note: 'curd' }, { id: 'f025', qty: 100, note: '1 small banana' }], calories: 398 },
        { name: 'Mid-Morning (10 AM)', foods: [{ id: 'f004', qty: 100, note: '100g paneer' }, { id: 'f044', qty: 150, note: 'cucumber salad' }], calories: 282 },
        { name: 'Lunch (1 PM)', foods: [{ id: 'f013', qty: 150, note: '1 cup moong dal' }, { id: 'f021', qty: 120, note: '3 rotis' }, { id: 'f040', qty: 100, note: 'palak side' }], calories: 398 },
        { name: 'Snack (4 PM)', foods: [{ id: 'f008', qty: 170, note: 'Greek yogurt' }, { id: 'f033', qty: 20, note: 'almonds' }], calories: 215 },
        { name: 'Dinner (7 PM)', foods: [{ id: 'f017', qty: 50, note: '50g soya chunks (dry)' }, { id: 'f016', qty: 100, note: 'chole' }, { id: 'f021', qty: 80, note: '2 rotis' }], calories: 427 }
      ]
    }
  ],

  // ===== ACHIEVEMENTS =====
  achievements: [
    { id: 'a001', name: 'First Step', desc: 'Complete your first workout', icon: '👟', xp: 50, category: 'Workout', trigger: 'workout_count_1' },
    { id: 'a002', name: 'Week Warrior', desc: 'Complete 7 workouts', icon: '🗓️', xp: 100, category: 'Workout', trigger: 'workout_count_7' },
    { id: 'a003', name: '30 Day Legend', desc: 'Complete 30 workouts', icon: '🏆', xp: 500, category: 'Workout', trigger: 'workout_count_30' },
    { id: 'a004', name: 'Iron Streak', desc: 'Workout 7 days in a row', icon: '🔥', xp: 200, category: 'Streak', trigger: 'streak_7' },
    { id: 'a005', name: 'Fire Nation', desc: 'Workout 30 days in a row', icon: '🌋', xp: 1000, category: 'Streak', trigger: 'streak_30' },
    { id: 'a006', name: 'PR Crusher', desc: 'Set your first Personal Record', icon: '💥', xp: 150, category: 'Strength', trigger: 'pr_count_1' },
    { id: 'a007', name: 'Calorie Master', desc: 'Hit calorie goal 7 days in a row', icon: '🎯', xp: 200, category: 'Nutrition', trigger: 'cal_streak_7' },
    { id: 'a008', name: 'Hydration Hero', desc: 'Drink 3L water for 7 days', icon: '💧', xp: 150, category: 'Nutrition', trigger: 'water_streak_7' },
    { id: 'a009', name: 'Early Bird', desc: 'Log a workout before 7 AM', icon: '🌅', xp: 75, category: 'Lifestyle', trigger: 'early_workout' },
    { id: 'a010', name: 'Night Owl', desc: 'Log a workout after 9 PM', icon: '🌙', xp: 75, category: 'Lifestyle', trigger: 'late_workout' },
    { id: 'a011', name: 'Transformation Started', desc: 'Log your first body measurement', icon: '📏', xp: 50, category: 'Progress', trigger: 'measurement_1' },
    { id: 'a012', name: 'Photo Evidence', desc: 'Upload your first progress photo', icon: '📸', xp: 100, category: 'Progress', trigger: 'photo_1' },
    { id: 'a013', name: 'Journaller', desc: 'Write 10 journal entries', icon: '📔', xp: 100, category: 'Wellness', trigger: 'journal_count_10' },
    { id: 'a014', name: '100 Sets Club', desc: 'Complete 100 total sets logged', icon: '💯', xp: 300, category: 'Strength', trigger: 'total_sets_100' },
    { id: 'a015', name: 'Centurion', desc: 'Log 100 meals', icon: '🍽️', xp: 250, category: 'Nutrition', trigger: 'meal_count_100' },
    { id: 'a016', name: 'Level 10', desc: 'Reach level 10 in TransformX', icon: '⭐', xp: 500, category: 'Platform', trigger: 'level_10' },
    { id: 'a017', name: 'Community Hero', desc: 'Share a transformation milestone', icon: '🌟', xp: 75, category: 'Community', trigger: 'share_1' },
    { id: 'a018', name: 'Bodyweight Beast', desc: 'Do 50 push-ups in one session', icon: '💪', xp: 200, category: 'Strength', trigger: 'pushup_50_session' },
    { id: 'a019', name: 'Volume King', desc: 'Lift 10,000 kg total volume in one week', icon: '👑', xp: 350, category: 'Strength', trigger: 'weekly_volume_10000' },
    { id: 'a020', name: 'Sleep Champion', desc: 'Log 8+ hours sleep for 7 days', icon: '😴', xp: 150, category: 'Wellness', trigger: 'sleep_streak_7' },
  ],

  // ===== XP LEVELS =====
  levels: [
    { level: 1, name: 'Beginner', xp_required: 0, badge: '🌱' },
    { level: 2, name: 'Active', xp_required: 200, badge: '🏃' },
    { level: 3, name: 'Dedicated', xp_required: 500, badge: '💪' },
    { level: 4, name: 'Consistent', xp_required: 1000, badge: '🔥' },
    { level: 5, name: 'Warrior', xp_required: 1750, badge: '⚔️' },
    { level: 6, name: 'Champion', xp_required: 2750, badge: '🏆' },
    { level: 7, name: 'Elite', xp_required: 4000, badge: '⭐' },
    { level: 8, name: 'Legend', xp_required: 5500, badge: '🌟' },
    { level: 9, name: 'Master', xp_required: 7500, badge: '👑' },
    { level: 10, name: 'TransformX Pro', xp_required: 10000, badge: '💎' },
  ],

  // ===== BODY PART REFERENCE =====
  bodyParts: [
    { key: 'weight', label: 'Body Weight', unit: 'kg', icon: '⚖️' },
    { key: 'bodyfat', label: 'Body Fat', unit: '%', icon: '📊' },
    { key: 'waist', label: 'Waist', unit: 'cm', icon: '📏' },
    { key: 'chest', label: 'Chest', unit: 'cm', icon: '📏' },
    { key: 'hips', label: 'Hips', unit: 'cm', icon: '📏' },
    { key: 'thigh', label: 'Thigh', unit: 'cm', icon: '📏' },
    { key: 'arms', label: 'Arms (Bicep)', unit: 'cm', icon: '📏' },
    { key: 'forearms', label: 'Forearms', unit: 'cm', icon: '📏' },
    { key: 'shoulders', label: 'Shoulders', unit: 'cm', icon: '📏' },
    { key: 'neck', label: 'Neck', unit: 'cm', icon: '📏' },
    { key: 'calves', label: 'Calves', unit: 'cm', icon: '📏' },
    { key: 'wrist', label: 'Wrist', unit: 'cm', icon: '📏' },
    { key: 'ankle', label: 'Ankle', unit: 'cm', icon: '📏' },
  ],

  // ===== DAILY HABITS =====
  habits: [
    { id: 'h001', name: 'Morning Walk', desc: '10-15 min outdoor walk before breakfast', icon: '🌅', category: 'Movement', xp: 20 },
    { id: 'h002', name: 'Drink 500ml water upon waking', desc: 'Rehydrate after 7-8 hrs fast', icon: '💧', category: 'Hydration', xp: 15 },
    { id: 'h003', name: 'Eat breakfast within 1 hour of waking', desc: 'Start metabolism and fuel muscles', icon: '🍳', category: 'Nutrition', xp: 20 },
    { id: 'h004', name: 'No phone 30 min before bed', desc: 'Improve sleep quality and recovery', icon: '📵', category: 'Sleep', xp: 15 },
    { id: 'h005', name: '10 min stretching at night', desc: 'Improve flexibility and recovery', icon: '🧘', category: 'Recovery', xp: 20 },
    { id: 'h006', name: 'Log all meals', desc: 'Awareness is the first step to change', icon: '📝', category: 'Nutrition', xp: 25 },
    { id: 'h007', name: 'Take daily supplements', desc: 'Creatine, Vitamin D, Omega-3', icon: '💊', category: 'Supplementation', xp: 15 },
    { id: 'h008', name: '7-9 hours sleep', desc: 'Sleep is when muscles grow', icon: '😴', category: 'Sleep', xp: 30 },
    { id: 'h009', name: 'Post-workout meal within 30 min', desc: 'Maximize protein synthesis', icon: '🍗', category: 'Nutrition', xp: 20 },
    { id: 'h010', name: 'Sunlight exposure 10-15 min', desc: 'Vitamin D, mood, and circadian rhythm', icon: '☀️', category: 'Wellness', xp: 15 },
  ],

  // ===== SUPPLEMENT GUIDE =====
  supplements: [
    { name: 'Creatine Monohydrate', dose: '3-5g daily', timing: 'Any time (post-workout preferred)', evidence: 'Tier 1 (Strongest evidence)', benefit: 'Strength, power, muscle volume, recovery', cost: '₹500-800/month', emoji: '💊' },
    { name: 'Whey Protein', dose: '25-50g per day', timing: 'Post-workout / between meals', evidence: 'Tier 1', benefit: 'Muscle protein synthesis, convenient protein source', cost: '₹1500-2500/month', emoji: '🥛' },
    { name: 'Vitamin D3', dose: '2000-4000 IU daily', timing: 'Morning with fat-containing meal', evidence: 'Tier 1', benefit: 'Testosterone, immunity, bone health, mood', cost: '₹200-400/month', emoji: '☀️' },
    { name: 'Omega-3 Fish Oil', dose: '2-3g EPA+DHA daily', timing: 'With meals to reduce fishy aftertaste', evidence: 'Tier 1', benefit: 'Anti-inflammatory, heart health, joint health', cost: '₹400-800/month', emoji: '🐟' },
    { name: 'Caffeine (Coffee/Pre-workout)', dose: '150-300mg pre-workout', timing: '30-60 minutes before workout', evidence: 'Tier 1', benefit: 'Strength, endurance, focus, fat oxidation', cost: '₹100-200/month (coffee)', emoji: '☕' },
    { name: 'Magnesium Glycinate', dose: '300-400mg daily', timing: 'Before bed', evidence: 'Tier 2', benefit: 'Sleep quality, muscle cramps, recovery', cost: '₹300-600/month', emoji: '🌙' },
    { name: 'Zinc', dose: '25-40mg daily', timing: 'Evening meal', evidence: 'Tier 2 (if deficient)', benefit: 'Testosterone support, immunity, recovery', cost: '₹200-400/month', emoji: '⚡' },
    { name: 'BCAA (optional)', dose: '5-10g intra-workout', timing: 'During fasted training only', evidence: 'Tier 3 (unnecessary if adequate protein)', benefit: 'Minimal if protein goals met', cost: '₹600-1200/month', emoji: '🔬' },
  ],

  // ===== TESTIMONIALS (for landing page) =====
  testimonials: [
    { name: 'Arjun Sharma', city: 'Mumbai', result: 'Lost 18kg in 5 months', before_weight: 95, after_weight: 77, stars: 5, text: 'TransformX AI gave me a diet plan that actually worked with Indian food. No more boring chicken and broccoli. I lost 18kg eating dal, roti and paneer!', avatar: 'AS', goal: 'Fat Loss' },
    { name: 'Priya Nair', city: 'Bangalore', result: 'Gained 6kg muscle in 4 months', before_weight: 48, after_weight: 54, stars: 5, text: 'As a vegetarian, I always struggled to hit my protein goals. The AI created a plan around paneer, dal, and soya that gave me the muscle gains I never thought possible.', avatar: 'PN', goal: 'Muscle Gain' },
    { name: 'Rahul Gupta', city: 'Delhi', result: 'Deadlift went from 60kg to 140kg', before_weight: 70, after_weight: 82, stars: 5, text: 'The progressive overload program is scientifically designed. My strength doubled in 6 months. The AI remembers all my PRs and pushes me perfectly.', avatar: 'RG', goal: 'Powerlifting' },
    { name: 'Sneha Patel', city: 'Ahmedabad', result: 'Reduced body fat from 32% to 22%', before_weight: 68, after_weight: 60, stars: 5, text: 'The daily habits, sleep tracking, and consistent meal logging changed my life. I feel more energetic and confident than ever at 32.', avatar: 'SP', goal: 'Body Recomposition' },
    { name: 'Karthik Menon', city: 'Chennai', result: 'Completed first 5K in 28 minutes', before_weight: 88, after_weight: 76, stars: 5, text: 'Started as a complete beginner who couldnt run 500m. The AI designed a couch-to-5K plan adjusted for my weight and fitness level. Game changer.', avatar: 'KM', goal: 'Marathon' },
    { name: 'Ananya Singh', city: 'Pune', result: 'Cleared back pain and improved posture', before_weight: 0, after_weight: 0, stars: 5, text: 'The mobility and posture correction program worked when physiotherapy had failed. 3 months of dedicated work and my posture is completely transformed.', avatar: 'AN', goal: 'Posture & Mobility' },
  ],

  // ===== FAQ =====
  faqs: [
    { q: 'Is this app suitable for complete beginners?', a: 'Absolutely! TransformX AI automatically adjusts to your fitness level. Whether you can\'t do a single push-up or have been training for years, the AI creates a plan that starts exactly where you are and progresses you safely.' },
    { q: 'Does it work with Indian food?', a: 'Yes! This is one of our core features. We have a database of 500+ Indian foods including regional varieties. The AI creates meal plans using dal, roti, paneer, sabzi, and other Indian staples that hit your exact protein, carb, and fat targets.' },
    { q: 'I have injuries/medical conditions. Is this safe?', a: 'The onboarding collects all medical information, injuries, and medications. The AI flags any exercises that are contraindicated and substitutes safer alternatives. However, always consult your doctor before starting any new exercise program.' },
    { q: 'Can I use this with just home equipment?', a: 'Yes! The app has programs for home (bodyweight only), minimal equipment (dumbbells + resistance bands), and full gym setups. You choose what you have and the AI builds around it.' },
    { q: 'How is this different from MyFitnessPal?', a: 'MyFitnessPal is just a food tracker. TransformX AI is a complete transformation system — it generates personalized workout programs, meal plans, habit coaching, posture correction, lifestyle guidance, and adapts weekly based on your progress.' },
    { q: 'Will the AI remember my preferences and history?', a: 'Yes. The AI has full context of your profile, measurements, goals, medical history, past workouts, meals, and progress. Every response is personalized to you, not generic advice.' },
    { q: 'How long until I see results?', a: 'Most users see strength gains and improved energy within 2-3 weeks. Visible body composition changes typically appear in 6-10 weeks depending on consistency, starting point, and goals. The AI sets realistic, evidence-based expectations.' },
    { q: 'Is the nutrition advice evidence-based?', a: 'Yes. All advice is based on peer-reviewed sports science research. We don\'t use bro-science or trendy fads. The AI cites realistic expectations and is transparent about what the evidence actually shows.' },
    { q: 'Can I track my progress photos?', a: 'Yes! You can upload Front, Back, Left, and Right photos at any time. The app organizes them chronologically so you can see your transformation visually.' },
    { q: 'Is there an offline mode?', a: 'Yes, core workout logging and meal tracking work offline. Your data syncs automatically when you reconnect.' },
    { q: 'How does the gamification system work?', a: 'You earn XP (experience points) for every action: logging workouts, meals, hitting streaks, setting PRs, and more. XP unlocks levels (1-10) and earns you achievement badges. There are daily and weekly missions to keep you motivated.' },
    { q: 'Can I export my data?', a: 'Yes! You can export all your data including workout history, nutrition logs, measurements, and AI-generated plans as PDF, CSV, or Excel files.' },
  ],

  // ===== ROUTINE TEMPLATES =====
  morningRoutine: [
    { time: '6:00 AM', habit: 'Wake up without snooze', icon: '⏰', desc: 'Consistent wake time regulates circadian rhythm' },
    { time: '6:05 AM', habit: '500ml water immediately', icon: '💧', desc: 'Rehydrate after 7-8 hour fast' },
    { time: '6:10 AM', habit: '5-10 min sunlight exposure', icon: '☀️', desc: 'Sets cortisol and melatonin rhythms' },
    { time: '6:20 AM', habit: '10 min mobility/stretching', icon: '🧘', desc: 'World greatest stretch, hip flexors, thoracic rotation' },
    { time: '6:35 AM', habit: 'Cold shower (optional)', icon: '🚿', desc: 'Alertness, mood, testosterone, brown fat activation' },
    { time: '7:00 AM', habit: 'High-protein breakfast', icon: '🍳', desc: '30-40g protein within 1 hour of waking' },
    { time: '7:30 AM', habit: 'Review daily goals', icon: '📋', desc: '2-minute review of todays workout and meals' },
  ],
  nightRoutine: [
    { time: '8:00 PM', habit: 'Last meal / dinner', icon: '🍽️', desc: 'Aim for 30-40g protein at last meal' },
    { time: '9:00 PM', habit: 'Dim lights, reduce blue light', icon: '💡', desc: 'Prepares melatonin for sleep' },
    { time: '9:30 PM', habit: 'Log journal entry', icon: '📔', desc: '3 things done well, 1 thing to improve tomorrow' },
    { time: '9:45 PM', habit: '10 min stretching', icon: '🧘', desc: 'Full body stretch, release tension' },
    { time: '10:00 PM', habit: 'Magnesium + sleep supplements', icon: '💊', desc: 'Magnesium glycinate, ashwagandha (optional)' },
    { time: '10:15 PM', habit: 'Room temp 18-20°C', icon: '🌡️', desc: 'Cool room dramatically improves sleep quality' },
    { time: '10:30 PM', habit: 'Sleep', icon: '😴', desc: '7-9 hours for optimal muscle growth and recovery' },
  ],
};

// Expose globally
window.TX_DATA = TX_DATA;

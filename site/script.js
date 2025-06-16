function loadRoutines(key) {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
}

function saveRoutines(key, routines) {
    localStorage.setItem(key, JSON.stringify(routines));
}

function createListItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
}

function initCardioPage(category) {
    const list = document.getElementById('routine-list');
    const form = document.getElementById('add-form');
    const routines = loadRoutines(category);
    routines.forEach(r => list.appendChild(createListItem(r.description)));

    form.addEventListener('submit', e => {
        e.preventDefault();
        const duration = form.elements['duration'].value;
        const overall = form.elements['overall'].value;
        const pace = form.elements['pace'].value;
        const desc = `Overall ${overall} min - Interval ${duration} min @ ${pace}`;
        const routine = { duration, overall, pace, description: desc };
        routines.push(routine);
        saveRoutines(category, routines);
        list.appendChild(createListItem(routine.description));
        form.reset();
    });
}

function initStrengthPage(category) {
    const list = document.getElementById('routine-list');
    const form = document.getElementById('add-form');
    const routines = loadRoutines(category);
    routines.forEach(r => list.appendChild(createListItem(r.description)));

    form.addEventListener('submit', e => {
        e.preventDefault();
        const exercise = form.elements['exercise'].value;
        const reps = form.elements['reps'].value;
        const link = form.elements['link'].value;
        const desc = `${exercise} - ${reps} reps`; 
        const routine = { exercise, reps, link, description: desc };
        routines.push(routine);
        saveRoutines(category, routines);
        const li = createListItem(routine.description);
        const a = document.createElement('a');
        a.href = link;
        a.textContent = ' demo';
        a.target = '_blank';
        li.appendChild(a);
        list.appendChild(li);
        form.reset();
    });
}

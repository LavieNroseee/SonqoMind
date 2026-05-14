// ════════════════════════════════
// DATOS
// ════════════════════════════════
const USUARIOS = {
  'mirtha.rios':{ pass:'docente123', nombre:'Prof. Mirtha Ríos', rol:'docente', initials:'MR' },
  'admin':      { pass:'admin123',   nombre:'Administrador',      rol:'admin',   initials:'AD' }
};

const ESTUDIANTES = [
  { id:0, nombre:'Sebastián García Quispe',  grado:'4to Sec.',  seccion:'B', ie:'IE 7077', initials:'SG', color:'#fee2e2', textColor:'#dc2626', ultimo:'Hace 45 días', estado:'alerta',    telefono:'+51 999 888 777' },
  { id:1, nombre:'Valeria Condori Mamani',   grado:'4to Sec.',  seccion:'B', ie:'IE 7077', initials:'VC', color:'#d1fae5', textColor:'#059669', ultimo:'Hace 15 días', estado:'ok',        telefono:'+51 987 654 321' },
  { id:2, nombre:'Lucía Mamani Torres',      grado:'3ro Sec.',  seccion:'A', ie:'IE 7077', initials:'LM', color:'#fef3c7', textColor:'#d97706', ultimo:'Hace 10 días', estado:'moderado',  telefono:'+51 976 543 210' },
  { id:3, nombre:'Rodrigo Flores Quispe',    grado:'4to Sec.',  seccion:'B', ie:'IE 7077', initials:'RF', color:'#f3eafd', textColor:'#7C3AED', ultimo:'Hace 30 días', estado:'pendiente', telefono:'+51 965 432 109' },
  { id:4, nombre:'Daniela Huanca Rosas',     grado:'2do Sec.',  seccion:'C', ie:'IE 7077', initials:'DH', color:'#d1fae5', textColor:'#059669', ultimo:'Hace 7 días',  estado:'ok',        telefono:'+51 954 321 098' },
  { id:5, nombre:'Kevin Apaza Ccopa',        grado:'5to Sec.',  seccion:'A', ie:'IE 7077', initials:'KA', color:'#fee2e2', textColor:'#dc2626', ultimo:'Nunca',        estado:'alerta',    telefono:'+51 943 210 987' },
  { id:6, nombre:'Andrea Quispe Lazo',       grado:'1ro Sec.',  seccion:'B', ie:'IE 7077', initials:'AQ', color:'#f3eafd', textColor:'#7C3AED', ultimo:'Hace 20 días', estado:'pendiente', telefono:'+51 932 109 876' },
  { id:7, nombre:'Marcos Ttito Callañaupa',  grado:'4to Sec.',  seccion:'B', ie:'IE 7077', initials:'MT', color:'#ccfbf1', textColor:'#0D9488', ultimo:'Hace 5 días',  estado:'ok',        telefono:'+51 921 098 765' },
];

const BADGE_MAP = {
  alerta:    { label:'⚠ Alerta',      cls:'badge-danger' },
  moderado:  { label:'Riesgo moderado', cls:'badge-warn'  },
  ok:        { label:'✓ Sin riesgo',   cls:'badge-ok'    },
  pendiente: { label:'Pendiente',      cls:'badge-none'  },
};

const INSTRUMENTOS = {
  'PHQ-A':{
    nombre:'PHQ-A', emoji:'💜', color:'#7C3AED', colorLight:'#f3eafd', maxScore:27,
    baremos:[{max:4,nivel:'bajo',lbl:'Riesgo mínimo',color:'#059669',bg:'#d1fae5',sub:'Monitoreo periódico recomendado'},
             {max:14,nivel:'moderado',lbl:'Riesgo moderado',color:'#d97706',bg:'#fef3c7',sub:'Se recomienda derivación'},
             {max:27,nivel:'alto',lbl:'Riesgo alto',color:'#dc2626',bg:'#fee2e2',sub:'Derivación urgente recomendada'}],
    pillLabels:['0–4 Mínimo','5–14 Moderado','15–27 Severo'],
    preguntas:[
      {e:'💭',t:'¿Con qué frecuencia te sentiste sin ánimo, deprimido/a o sin esperanza?',opts:['😊 Nunca','🤔 Algunos días','😔 Más de la mitad','😞 Casi siempre']},
      {e:'🎯',t:'¿Tuviste poco interés o placer en hacer cosas que antes disfrutabas?',opts:['😊 Nunca','🤔 Algunos días','😔 Más de la mitad','😞 Casi siempre']},
      {e:'💤',t:'¿Tuviste problemas para dormir o dormías demasiado?',opts:['😊 Nunca','🤔 Algunos días','😔 Más de la mitad','😞 Casi siempre']},
      {e:'⚡',t:'¿Te sentiste cansado/a o con poca energía durante el día?',opts:['😊 Nunca','🤔 Algunos días','😔 Más de la mitad','😞 Casi siempre']},
      {e:'🍽️',t:'¿Tuviste poco apetito o comiste en exceso?',opts:['😊 Nunca','🤔 Algunos días','😔 Más de la mitad','😞 Casi siempre']},
      {e:'😔',t:'¿Te sentiste mal contigo mismo/a o como si hubieras fallado a tu familia?',opts:['😊 Nunca','🤔 Algunos días','😔 Más de la mitad','😞 Casi siempre']},
      {e:'🧠',t:'¿Te costó concentrarte en tareas como estudiar o ver televisión?',opts:['😊 Nunca','🤔 Algunos días','😔 Más de la mitad','😞 Casi siempre']},
      {e:'🐢',t:'¿Te moviste o hablaste tan despacio que otras personas lo notaron?',opts:['😊 Nunca','🤔 Algunos días','😔 Más de la mitad','😞 Casi siempre']},
      {e:'🌙',t:'¿Tuviste pensamientos de que estarías mejor muerto/a o de hacerte daño?',opts:['😊 Nunca','🤔 Algunos días','😔 Más de la mitad','😞 Casi siempre']}
    ]
  },
  'GAD-7':{
    nombre:'GAD-7', emoji:'🌊', color:'#0D9488', colorLight:'#ccfbf1', maxScore:21,
    baremos:[{max:4,nivel:'bajo',lbl:'Ansiedad mínima',color:'#059669',bg:'#d1fae5',sub:'Sin acción urgente'},
             {max:9,nivel:'leve',lbl:'Ansiedad leve',color:'#d97706',bg:'#fef3c7',sub:'Monitoreo y psicoeducación'},
             {max:14,nivel:'moderado',lbl:'Ansiedad moderada',color:'#ea580c',bg:'#fff7ed',sub:'Se recomienda derivación'},
             {max:21,nivel:'alto',lbl:'Ansiedad severa',color:'#dc2626',bg:'#fee2e2',sub:'Derivación urgente'}],
    pillLabels:['0–4 Mínima','5–9 Leve','10–14 Moderada','15–21 Severa'],
    preguntas:[
      {e:'😰',t:'¿Con qué frecuencia te sentiste nervioso/a, ansioso/a o con los nervios de punta?',opts:['😊 Nunca','🤔 Algunos días','😟 Más de la mitad','😨 Casi siempre']},
      {e:'🛑',t:'¿No pudiste parar o controlar tus preocupaciones?',opts:['😊 Nunca','🤔 Algunos días','😟 Más de la mitad','😨 Casi siempre']},
      {e:'🌀',t:'¿Te preocupaste demasiado por diferentes cosas?',opts:['😊 Nunca','🤔 Algunos días','😟 Más de la mitad','😨 Casi siempre']},
      {e:'😤',t:'¿Tuviste dificultad para relajarte?',opts:['😊 Nunca','🤔 Algunos días','😟 Más de la mitad','😨 Casi siempre']},
      {e:'🪑',t:'¿Estuviste tan inquieto/a que era difícil quedarte quieto/a?',opts:['😊 Nunca','🤔 Algunos días','😟 Más de la mitad','😨 Casi siempre']},
      {e:'😠',t:'¿Te sentiste fácilmente molesto/a o irritable?',opts:['😊 Nunca','🤔 Algunos días','😟 Más de la mitad','😨 Casi siempre']},
      {e:'💀',t:'¿Sentiste miedo de que algo terrible pudiera pasar?',opts:['😊 Nunca','🤔 Algunos días','😟 Más de la mitad','😨 Casi siempre']}
    ]
  },
  'PSC':{
    nombre:'PSC', emoji:'🩺', color:'#db2777', colorLight:'#fdf2f8', maxScore:28,
    baremos:[{max:27,nivel:'bajo',lbl:'Sin riesgo significativo',color:'#059669',bg:'#d1fae5',sub:'Monitoreo periódico recomendado'},
             {max:28,nivel:'alto',lbl:'Riesgo significativo',color:'#dc2626',bg:'#fee2e2',sub:'Evaluación especializada urgente'}],
    pillLabels:['0–27 Sin riesgo','28+ Con riesgo'],
    preguntas:[
      {e:'😊',t:'¿Se queja de dolores y molestias físicas frecuentes?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'🏫',t:'¿Tiene menos ganas de ir al colegio?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'😴',t:'¿Tiene poca energía o se cansa fácilmente?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'😤',t:'¿Se irrita o enoja con facilidad?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'🤝',t:'¿Le cuesta llevarse bien con otros jóvenes?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'😰',t:'¿Parece asustado/a sin razón aparente?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'💭',t:'¿Sueña despierto/a con frecuencia durante clases?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'🎯',t:'¿Le cuesta concentrarse en las actividades?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'🦶',t:'¿Actúa sin pensar, de manera impulsiva?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'😔',t:'¿Se siente triste o infeliz frecuentemente?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'🏃',t:'¿Le cuesta quedarse quieto/a?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'👥',t:'¿Tiene problemas con sus amigos o compañeros?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'⚠️',t:'¿Pelea o discute con frecuencia?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']},
      {e:'🙁',t:'¿Parece no estar feliz con su vida en general?',opts:['✅ Nunca','🔸 A veces','❌ Siempre']}
    ]
  }
};

const MASCOT_MSGS = [
  {t:'¡Comenzamos! 💜',s:'Tómate tu tiempo, no hay prisa'},
  {t:'¡Muy bien! ⭐',s:'Cada respuesta nos ayuda a conocerte mejor'},
  {t:'¡Sigue así! 🎯',s:'Estás haciendo un gran trabajo'},
  {t:'¡Increíble! 🔥',s:'Ya llevamos más de la mitad'},
  {t:'¡Casi terminamos! 🚀',s:'Solo unas pocas preguntas más'},
  {t:'¡Lo lograste! 🎉',s:'Gracias por tu valentía y honestidad'}
];

// ════════════════════════════════
// ESTADO
// ════════════════════════════════
let usuarioActual = null;
let estudianteActual = null;
let instrumentoActual = null;
let curQ = 0, respuestas = {}, streakCount = 0;
const SIDEBAR_COUNT = 6;
const STEP_COUNT = 5;

function byId(id) { return document.getElementById(id); }

function paintAvatar(prefix, persona) {
  byId(`${prefix}-av`).textContent = persona.initials;
  byId(`${prefix}-av`).style.background = persona.color;
  byId(`${prefix}-av`).style.color = persona.textColor;
}

// ════════════════════════════════
// NAVEGACIÓN
// ════════════════════════════════
function goTo(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + screen).classList.add('active');
  window.scrollTo(0, 0);
}

function syncSidebars() {
  if (!usuarioActual) return;
  for (let i = 1; i <= SIDEBAR_COUNT; i++) {
    const av = byId('av'+i);
    const nm = byId('nm'+i);
    const rl = byId('rl'+i);
    if (av) av.textContent = usuarioActual.initials;
    if (nm) nm.textContent = usuarioActual.nombre;
    if (rl) rl.textContent = usuarioActual.rol;
  }
}

// ════════════════════════════════
// LOGIN
// ════════════════════════════════
function setRole(btn) {
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function doLogin() {
  const u = byId('inp-user').value.trim();
  const p = byId('inp-pass').value.trim();
  const err = byId('login-error');
  if (USUARIOS[u] && USUARIOS[u].pass === p) {
    err.classList.remove('show');
    usuarioActual = { ...USUARIOS[u], usuario: u };
    syncSidebars();
    byId('badge-fecha').textContent = new Date().toLocaleDateString('es-PE',{weekday:'long',day:'numeric',month:'long'});
    renderEstudiantes(ESTUDIANTES);
    goTo('dashboard');
  } else {
    err.classList.add('show');
  }
}

function doLogout() { usuarioActual = null; goTo('login'); }

// ════════════════════════════════
// LISTA DE ESTUDIANTES
// ════════════════════════════════
function renderEstudiantes(lista) {
  const container = byId('stu-list');
  container.innerHTML = lista.map(stu => {
    const b = BADGE_MAP[stu.estado];
    return `
    <div class="stu-row" onclick="seleccionarEstudiante(${stu.id})">
      <div class="stu-name-cell">
        <div class="stu-av-sm" style="background:${stu.color};color:${stu.textColor}">${stu.initials}</div>
        <div><div class="stu-nm">${stu.nombre}${stu.estado==='alerta'?'<span style="display:inline-flex;align-items:center;color:#dc2626;margin-left:6px;font-size:11px"><svg viewBox="0 0 512 512" fill="currentColor" style="width:1em;height:1em;vertical-align:-.125em"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm-32 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg></span>':''}</div><div class="stu-gr">${stu.ie}</div></div>
      </div>
      <div class="stu-cell hide-sm">${stu.grado} · ${stu.seccion}</div>
      <div class="stu-cell hide-sm">${stu.ultimo}</div>
      <div class="stu-cell"><span class="badge ${b.cls}">${b.label}</span></div>
      <div><button class="btn-tamizar"><span style="display:inline-flex;align-items:center"><svg viewBox="0 0 384 512" fill="currentColor" style="width:1em;height:1em;vertical-align:-.125em"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg></span> Tamizar</button></div>
    </div>`;
  }).join('');
  // Los botones también navegan
  container.querySelectorAll('.stu-row').forEach((row, i) => {
    row.addEventListener('click', () => { seleccionarEstudiante(lista[i].id); });
  });
}

function filtrarEstudiantes(q) {
  const filtrado = ESTUDIANTES.filter(e => e.nombre.toLowerCase().includes(q.toLowerCase()));
  renderEstudiantes(filtrado);
}

function seleccionarEstudiante(id) {
  estudianteActual = ESTUDIANTES.find(e => e.id === id);
  paintAvatar('sel-stu', estudianteActual);
  byId('sel-stu-name').textContent = estudianteActual.nombre;
  byId('sel-stu-sub').textContent = `${estudianteActual.grado} · Sección ${estudianteActual.seccion} · ${estudianteActual.ie}`;
  goTo('selector');
}

// ════════════════════════════════
// SELECTOR DE INSTRUMENTO
// ════════════════════════════════
function seleccionarInstrumento(key) {
  instrumentoActual = INSTRUMENTOS[key];
  initTamizaje();
  goTo('tamizaje');
}

// ════════════════════════════════
// TAMIZAJE
// ════════════════════════════════
function initTamizaje() {
  curQ = 0; respuestas = {}; streakCount = 0;
  const instr = instrumentoActual;
  const total = instr.preguntas.length;

  // Header
  byId('tam-title').textContent = `Tamizaje ${instr.nombre}`;
  byId('bc-instr').textContent = instr.nombre;
  byId('tam-badge').textContent = instr.nombre;
  byId('tam-badge').style.background = instr.colorLight;
  byId('tam-badge').style.color = instr.color;
  byId('tam-instr-pill').textContent = instr.nombre;
  byId('tam-instr-pill').style.background = instr.colorLight;
  byId('tam-instr-pill').style.color = instr.color;

  // Estudiante en tamizaje
  if (estudianteActual) {
    paintAvatar('tam-stu', estudianteActual);
    byId('tam-stu-name').textContent = estudianteActual.nombre;
    byId('tam-stu-sub').textContent = `${estudianteActual.grado} · Sección ${estudianteActual.seccion} · ${estudianteActual.ie}`;
  }

  // XP stars
  const sc = byId('stars-container');
  sc.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const s = document.createElement('span');
    s.className='star'; s.textContent='⭐'; s.style.opacity='0.22'; s.id='star-'+i;
    sc.appendChild(s);
  }

  // Steps
  const stepsEl = byId('xp-steps');
  const mid = Math.floor(total/2);
  const stepLabels = ['Inicio', `P1–${Math.ceil(total/3)}`, `P${Math.ceil(total/3)+1}–${mid}`, `P${mid+1}–${total-1}`, '🏁 Final'];
  stepsEl.innerHTML = stepLabels.map((l,i) => `<span class="xp-step" id="step-${i}">${l}</span>`).join('');

  renderQ();
}

function renderQ() {
  const instr = instrumentoActual;
  const preguntas = instr.preguntas;
  const total = preguntas.length;
  const q = preguntas[curQ];

  byId('q-emoji').textContent = q.e;
  byId('q-num').textContent = `PREGUNTA ${curQ+1} DE ${total} · ${instr.nombre}`;
  byId('q-text').textContent = q.t;
  byId('xp-count').textContent = `Pregunta ${curQ+1} de ${total}`;
  byId('xp-fill').style.width = Math.round((curQ/total)*100)+'%';
  byId('xp-fill').style.background = `linear-gradient(90deg,${instr.color},${instr.colorLight==='#ccfbf1'?'#2dd4bf':instr.color}dd)`;

  // Estrella
  if (curQ > 0) { const s = document.getElementById('star-'+(curQ-1)); if(s){s.style.opacity='1';} }

  // Steps
  for(let i=0;i<STEP_COUNT;i++){
    const el = byId('step-'+i);
    if(!el) continue;
    const thresholds = [0, Math.ceil(total/3), Math.ceil(total*2/3), total-2, total-1];
    el.className = 'xp-step'+(curQ>thresholds[i]?' done':curQ===thresholds[i]?' now':'');
  }

  // Mascota
  const mi = Math.min(Math.floor(curQ/(total/5)), MASCOT_MSGS.length-1);
  byId('mascot-text').textContent = MASCOT_MSGS[mi].t;
  byId('mascot-sub').textContent = MASCOT_MSGS[mi].s;

  // Opciones
  const oc = byId('opts-container');
  oc.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt'+(respuestas[curQ]===i?' sel':'');
    const parts = opt.split(' ');
    const emo = parts[0]; const lbl = parts.slice(1).join(' ');
    btn.innerHTML = `<span class="opt-e">${emo}</span><span class="opt-l">${lbl}</span><span class="opt-p">${i} pt${i!==1?'s':''}</span>`;
    btn.onclick = () => selectOpt(i);
    oc.appendChild(btn);
  });

  byId('btn-next').disabled = respuestas[curQ]===undefined;

  // Streak
  const badge = byId('streak-badge');
  if (streakCount >= 3) { badge.style.display='inline-flex'; byId('streak-num').textContent=streakCount; }
  else badge.style.display='none';

  // Animar card
  const card = byId('q-card');
  card.style.animation='none'; void card.offsetWidth; card.style.animation='slideUp .3s ease';
}

function selectOpt(i) {
  respuestas[curQ] = i; streakCount++;
  document.querySelectorAll('.opt').forEach((b,idx) => { b.className='opt'+(idx===i?' sel':''); });
  byId('btn-next').disabled = false;
}

function nextQ() {
  if (respuestas[curQ]===undefined) return;
  const total = instrumentoActual.preguntas.length;
  if (curQ < total-1) { curQ++; renderQ(); }
  else calcularResultado();
}

function prevQ() { if(curQ>0){curQ--;renderQ();} }

// ════════════════════════════════
// RESULTADO
// ════════════════════════════════
function calcularResultado() {
  const instr = instrumentoActual;
  const total = Object.values(respuestas).reduce((a,b)=>a+b,0);

  let baremo = instr.baremos[instr.baremos.length-1];
  for(const b of instr.baremos){ if(total<=b.max){baremo=b;break;} }

  const {nivel, color, bg, lbl, sub} = baremo;

  // Semáforo
  ['sl-red','sl-yellow','sl-green'].forEach(id=>document.getElementById(id).classList.remove('on'));
  if(nivel==='bajo') document.getElementById('sl-green').classList.add('on');
  else if(nivel==='leve') document.getElementById('sl-yellow').classList.add('on');
  else if(nivel==='moderado') document.getElementById('sl-yellow').classList.add('on');
  else document.getElementById('sl-red').classList.add('on');

  document.getElementById('res-badge').textContent = lbl;
  document.getElementById('res-badge').style.background = bg;
  document.getElementById('res-badge').style.color = color;
  document.getElementById('sem-lbl').textContent = lbl;
  document.getElementById('sem-lbl').style.color = color;
  document.getElementById('sem-sub').textContent = sub;

  // Score
  document.getElementById('sc-big').textContent = total;
  document.getElementById('sc-big').style.color = color;
  document.getElementById('sc-label').textContent = `PUNTAJE · ${instr.nombre}`;
  document.getElementById('sc-max').textContent = `de ${instr.maxScore} puntos`;
  document.getElementById('sc-bar').style.width = Math.round((total/instr.maxScore)*100)+'%';
  document.getElementById('sc-bar').style.background = color;

  // Pills
  document.getElementById('sc-pills').innerHTML = instr.pillLabels.map((p,i)=>{
    const cls = ['low','mid','mid','high'][i]||'high';
    const active = instr.baremos[i] && instr.baremos[i].nivel===nivel;
    return `<div class="sc-pill ${cls}" style="${active?`border:1.5px solid ${color}`:''}'">${p}${active?' ◀':''}</div>`;
  }).join('');

  // Interpretación
  const interpTexts = {
    bajo:`El puntaje de <strong>${total} pts</strong> está en el rango mínimo. No presenta síntomas significativos. Se recomienda monitoreo periódico.`,
    leve:`El puntaje de <strong>${total} pts</strong> indica síntomas <strong>leves</strong>. Se recomienda psicoeducación y seguimiento cercano.`,
    moderado:`El puntaje de <strong>${total} pts</strong> indica síntomas <strong>moderados</strong> (${instr.nombre}). Se recomienda derivar al Centro de Salud Mental Comunitario para evaluación profesional.`,
    alto:`El puntaje de <strong>${total} pts</strong> indica síntomas <strong>severos</strong>. Se requiere atención especializada urgente. Por favor derive al estudiante hoy.`
  };
  const ic = document.getElementById('interp-card');
  ic.style.background=bg; ic.style.border=`1px solid ${color}`;
  document.getElementById('interp-title').style.color=color;
  document.getElementById('interp-text').innerHTML = interpTexts[nivel]||interpTexts['alto'];

  document.getElementById('btn-derivar').style.display = nivel!=='bajo'?'flex':'none';
  document.getElementById('no-derivar').style.display = nivel==='bajo'?'block':'none';

  // Resultado info estudiante
  if(estudianteActual){
    paintAvatar('res-stu', estudianteActual);
    byId('res-stu-name').textContent = estudianteActual.nombre;
    byId('res-stu-sub').textContent = `${instr.nombre} · ${new Date().toLocaleDateString('es-PE',{day:'numeric',month:'long',year:'numeric'})} · ${usuarioActual?.nombre||''}`;
  }

  // Derivación data
  document.getElementById('ds-score').textContent = `${total} pts`;
  document.getElementById('ds-riesgo').textContent = lbl;
  if(estudianteActual){
    document.getElementById('deriv-sub-text').textContent = `${estudianteActual.nombre} ha sido derivado/a al CSMC. El tutor fue notificado por WhatsApp al ${estudianteActual.telefono}.`;
    document.getElementById('wa-msg').textContent = `Estimado tutor de ${estudianteActual.nombre}: ha sido referido/a al CSMC Villa El Salvador para evaluación de salud mental. Caso #SQ-2026-047. Cita asignada en 48 horas. — SonqoMind+`;
  }

  goTo('resultado');
}

// ════════════════════════════════
// INIT
// ════════════════════════════════
document.addEventListener('keydown', e => {
  if(e.key==='Enter' && document.getElementById('screen-login').classList.contains('active')) doLogin();
});
renderEstudiantes(ESTUDIANTES);

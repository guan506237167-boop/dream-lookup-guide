const meanings={
  water:['Water','emotion, memory, transition, and the depth of a situation','Notice whether the water was clear, rising, calm, or overwhelming.'],
  snake:['Snake','fear, renewal, warning, temptation, or hidden tension','Ask whether the snake threatened you, ignored you, or changed form.'],
  teeth:['Teeth','confidence, speech, aging, image, or loss of control','Connect the dream to recent moments of pressure, visibility, or communication.'],
  house:['House','identity, family structure, privacy, or inner rooms of the self','Rooms often point to different parts of life: family, work, memory, or hidden concerns.'],
  flying:['Flying','freedom, escape, ambition, or distance from pressure','Check whether flying felt controlled or unstable.'],
  wedding:['Wedding','commitment, transition, public promise, or family expectation','The key is not always romance; it may be a new role or obligation.'],
  money:['Money','value, security, exchange, or self-worth','Look at whether you gained, lost, hid, counted, or gave away money.'],
  falling:['Falling','loss of control, pressure, uncertainty, or a sudden reality check','Focus on what happened right before the fall.'],
  fire:['Fire','energy, anger, purification, risk, or transformation','A useful distinction is whether the fire warmed, destroyed, or warned.'],
  baby:['Baby','new responsibility, vulnerability, beginning, or undeveloped potential','Ask what in your life feels new and still needs protection.'],
  death:['Death','ending, transition, release, or fear of change','Dream death often marks symbolic closure rather than literal prediction.'],
  ex:['Ex partner','unfinished emotion, old patterns, comparison, or memory','The dream may be about a pattern, not necessarily the person.'],
  car:['Car','direction, control, speed, and how you move through daily life','Who was driving matters.'],
  school:['School','evaluation, learning, pressure, or feeling unprepared','This often appears when current life feels like a test.'],
  dog:['Dog','loyalty, protection, instinct, friendship, or trust','The dog behavior changes the reading.'],
  cat:['Cat','independence, intuition, privacy, or emotional distance','Notice whether the cat approached, watched, scratched, or disappeared.']
};
function getToolRoot(target){return target?.closest('.dream-tool-card, .hero-tool-card, .container') || document;}
function interpret(event){
  const root=getToolRoot(event?.currentTarget);
  const raw=(root.querySelector('#symbol')?.value||'water').toLowerCase().trim();
  const mood=root.querySelector('#mood')?.value||'calm';
  const key=Object.keys(meanings).find(k=>raw.includes(k)) || raw;
  const data=meanings[key]||[raw||'Dream symbol','a personal symbol that needs context from recent life','Write down the scene, people, place, and strongest feeling before choosing a meaning.'];
  const moodNote={calm:'The calm mood makes the symbol more reflective than urgent.',fearful:'The fearful mood suggests starting with anxiety, warning, or pressure.',joyful:'The joyful mood points toward desire, relief, growth, or permission.',confusing:'The confusing mood means the setting and recent life context matter more than a single definition.'}[mood]||'';
  root.querySelector('#result').innerHTML=`<h3>${data[0]} dream</h3><p>This symbol often points to ${data[1]}.</p><p><strong>Mood check:</strong> ${moodNote}</p><p><strong>Next question:</strong> ${data[2]}</p>`;
}
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('[data-interpret]').forEach(b=>b.addEventListener('click',interpret));});



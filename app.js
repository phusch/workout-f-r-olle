const exercises = [
  { title:'Aufrichten & Bauchatmung', image:'assets/01_aufrichten_bauchatmung.webp', seconds:60, tool:'none', classic:true, tags:['all','back','mobility'], purpose:'Haltung, Atmung und ruhiger Start.' },
  { title:'Nacken & Schulterkreise', image:'assets/02_nacken_schulterkreise.webp', seconds:90, tool:'none', classic:true, tags:['all','shoulders','mobility'], purpose:'Nacken und Schultergürtel mobilisieren.' },
  { title:'Wolkenhände im Sitzen', image:'assets/03_wolkenhaende.webp', seconds:120, tool:'none', classic:true, tags:['all','shoulders','back','mobility'], purpose:'Fließende Koordination und Oberkörperbeweglichkeit.' },
  { title:'Brust öffnen & Ellbogen zurückziehen', image:'assets/04_brust_oeffnen.webp', seconds:90, tool:'none', classic:true, tags:['all','shoulders','back','mobility'], purpose:'Brust öffnen und obere Rückenmuskulatur aktivieren.' },
  { title:'Sitzende Rumpfdrehung', image:'assets/05_rumpfdrehung.webp', seconds:90, tool:'none', classic:true, tags:['all','back','mobility'], purpose:'Rumpfrotation und Wirbelsäulenbeweglichkeit.' },
  { title:'Sitzendes Marschieren mit Armzug', image:'assets/06_marschieren.webp', seconds:120, tool:'none', classic:true, tags:['all','legs','activation'], purpose:'Kreislauf aktivieren und Hüftbeuger kräftigen.' },
  { title:'Knieheben mit Beinstreckung', image:'assets/07_knieheben_beinstreckung.webp', seconds:90, tool:'none', classic:true, tags:['all','legs','activation'], purpose:'Beine, Knie und Rumpf kontrolliert aktivieren.' },
  { title:'Seitbeuge & Diagonalzug', image:'assets/08_seitbeuge_diagonalzug.webp', seconds:90, tool:'none', classic:true, tags:['all','back','shoulders','mobility'], purpose:'Flanken verlängern und seitlichen Rumpf aktivieren.' },

  { title:'Armheben mit Theraband', image:'assets/09_band_armheben.webp', seconds:120, tool:'band', tags:['all','shoulders','back'], purpose:'Schulterkontrolle und oberen Rücken kräftigen.', steps:['Aufrecht auf der vorderen Stuhlhälfte sitzen.','Theraband etwa schulterbreit greifen.','Arme bis maximal Schulterhöhe anheben und Band sanft auseinanderziehen.','Langsam wieder absenken; 8–12 Wiederholungen.'], focus:['Schultern bleiben tief.','Band nur leicht bis mittel spannen.','Kein Hohlkreuz – Bauch sanft aktivieren.','Bewegung ohne Schwung.'], strengthens:['Schultermuskulatur','Oberer Rücken','Rotatorenmanschette','Rumpfstabilität'], mobilizes:['Schultergelenke','Brustkorb'] },
  { title:'Brustzug mit Theraband', image:'assets/10_band_brustzug.webp', seconds:120, tool:'band', tags:['all','shoulders','back'], purpose:'Brustkorb öffnen und Schulterblattmuskeln stärken.', steps:['Band auf Brusthöhe mit beiden Händen halten.','Arme fast gestreckt nach vorn.','Band auseinanderziehen, bis die Hände seitlich stehen.','Kontrolliert zurück; 8–12 Wiederholungen.'], focus:['Schulterblätter nach hinten-unten führen.','Handgelenke neutral halten.','Nicht ins Hohlkreuz ausweichen.','Ausatmen beim Auseinanderziehen.'], strengthens:['Hintere Schulter','Rhomboiden','Trapezmuskel','Rotatorenmanschette'], mobilizes:['Brustmuskulatur','Vordere Schulter'] },
  { title:'Bizeps-Curl mit Hanteln', image:'assets/11_hantel_bizeps.webp', seconds:120, tool:'dumbbell', tags:['all','shoulders','activation'], purpose:'Arme kräftigen und Haltekraft verbessern.', steps:['Je eine leichte Hantel greifen.','Oberarme dicht am Körper halten.','Unterarme langsam nach oben beugen.','Kontrolliert absenken; 8–12 Wiederholungen.'], focus:['Leichte Hanteln wählen, z. B. 0,5–2 kg.','Ellbogen bleiben am Körper.','Nicht mit dem Oberkörper wippen.','Ausatmen beim Anheben.'], strengthens:['Bizeps','Unterarme','Griffkraft','Rumpfhaltung'], mobilizes:['Ellbogengelenke'] },
  { title:'Trizeps-Strecken über Kopf', image:'assets/12_hantel_trizeps.webp', seconds:120, tool:'dumbbell', tags:['all','shoulders'], purpose:'Armstrecker und Schulterstabilität kräftigen.', steps:['Eine leichte Hantel mit beiden Händen halten.','Hantel über den Kopf führen.','Ellbogen beugen und Hantel langsam hinter den Kopf absenken.','Arme wieder strecken; 6–10 Wiederholungen.'], focus:['Sehr leichtes Gewicht verwenden.','Ellbogen zeigen möglichst nach vorn.','Nicht ins Hohlkreuz gehen.','Nur schmerzfreien Bewegungsweg nutzen.'], strengthens:['Trizeps','Schulterstabilisatoren','Rumpf'], mobilizes:['Schultergelenke','Latissimus sanft'] },
  { title:'Seitheben mit Hanteln', image:'assets/13_hantel_seitheben.webp', seconds:120, tool:'dumbbell', tags:['all','shoulders'], purpose:'Schultern kräftigen und aufrechte Haltung unterstützen.', steps:['Leichte Hanteln seitlich neben dem Körper halten.','Arme leicht gebeugt seitlich anheben.','Nur bis etwa Schulterhöhe.','Langsam absenken; 8–10 Wiederholungen.'], focus:['Gewicht eher zu leicht als zu schwer.','Schultern nicht hochziehen.','Handgelenke neutral halten.','Langsame, kontrollierte Bewegung.'], strengthens:['Seitliche Schulter','Oberer Rücken','Rumpfstabilität'], mobilizes:['Schultergürtel'] },
  { title:'Sitzendes Rudern mit Theraband', image:'assets/14_band_rudern.webp', seconds:120, tool:'band', tags:['all','back','shoulders'], purpose:'Rücken und Schulterblätter kräftigen.', steps:['Band sicher um beide Füße legen.','Bandenden greifen, Rücken lang.','Ellbogen nach hinten ziehen.','Langsam lösen; 8–12 Wiederholungen.'], focus:['Band muss sicher an den Füßen sitzen.','Brustbein leicht anheben.','Schultern tief halten.','Nicht ruckartig ziehen.'], strengthens:['Latissimus','Rhomboiden','Bizeps','Hintere Schulter'], mobilizes:['Brustmuskulatur','Schulterblätter'] },
  { title:'Knieheben & Bauchspannung', image:'assets/15_core_aktivieren.webp', seconds:120, tool:'none', tags:['all','legs','back','activation'], purpose:'Rumpf, Hüftbeuger und Koordination aktivieren.', steps:['Aufrecht sitzen und Hände locker an die Stuhlkante legen.','Ein Knie Richtung Brust anheben.','Bauch sanft anspannen und 1–2 Sekunden halten.','Absetzen und Seite wechseln; 8–12 je Seite.'], focus:['Nicht rund zusammensacken.','Nur so hoch heben, wie der Rücken ruhig bleibt.','Gleichmäßig atmen.','Langsam absetzen.'], strengthens:['Tiefe Bauchmuskulatur','Hüftbeuger','Rumpfstabilisatoren'], mobilizes:['Hüfte','Lenden-Becken-Bereich sanft'] },
  { title:'Sitzende Hüftöffnung', image:'assets/16_hueftoeffnung.webp', seconds:120, tool:'other', tags:['all','legs','mobility'], purpose:'Hüfte und Gesäßmuskulatur beweglich halten.', steps:['Aufrecht sitzen.','Einen Fußknöchel locker auf den gegenüberliegenden Oberschenkel legen.','Mit langem Rücken leicht nach vorn neigen.','20–30 Sekunden halten, dann Seite wechseln.'], focus:['Nicht auf das Knie drücken.','Rücken möglichst lang halten.','Dehnung im Gesäß, nicht im Knie spüren.','Ruhig weiteratmen.'], strengthens:['Haltemuskulatur des Rumpfs'], mobilizes:['Gesäßmuskulatur','Außenrotatoren der Hüfte','Hüftgelenk'] },
  { title:'Beinheben mit Theraband', image:'assets/17_band_beinheben.webp', seconds:120, tool:'band', tags:['all','legs','activation'], purpose:'Oberschenkel und Hüfte mit Widerstand kräftigen.', steps:['Band um die Fußsohle eines Beins legen und Enden festhalten.','Knie zunächst gebeugt halten.','Unterschenkel langsam nach vorn strecken.','Kontrolliert zurück; 8–12 Wiederholungen je Seite.'], focus:['Band sicher führen, damit es nicht abrutscht.','Knie nie ruckartig durchdrücken.','Oberkörper bleibt aufrecht.','Widerstand leicht wählen.'], strengthens:['Quadrizeps','Hüftbeuger','Schienbeinmuskulatur','Rumpf'], mobilizes:['Kniegelenk','Sprunggelenk'] },
  { title:'Wadenheben am Stuhl', image:'assets/18_wadenheben.webp', seconds:120, tool:'other', tags:['all','legs','activation'], purpose:'Waden, Füße und Unterschenkel für den Alltag kräftigen.', steps:['Füße hüftbreit aufstellen.','Fersen langsam vom Boden anheben.','Oben 1–2 Sekunden halten.','Langsam absenken; 12–20 Wiederholungen.'], focus:['Druck über Großzehenballen und Kleinzehenballen verteilen.','Nicht wippen.','Knie bleiben über den Füßen.','Für mehr Reiz leichte Hanteln auf den Oberschenkeln halten.'], strengthens:['Wadenmuskulatur','Fußmuskulatur','Unterschenkel'], mobilizes:['Sprunggelenke'] }
,
  { title:'Sitzende Katze-Kuh', image:'assets/19_yoga_cat_cow.webp', seconds:120, tool:'other', yoga:true, tags:['all','back','mobility','yoga'], purpose:'Die Wirbelsäule sanft in Beugung und Streckung bewegen.', steps:['Aufrecht auf dem Stuhl sitzen, Füße sicher aufstellen.','Hände locker auf die Oberschenkel legen.','Ausatmen: Rücken rund werden lassen, Kinn leicht Richtung Brust.','Einatmen: Brustbein sanft anheben und Wirbelsäule wieder verlängern.','6–10 ruhige Atemzyklen ohne Eile.'], focus:['Bewegung über die ganze Wirbelsäule verteilen.','Kopf nicht in den Nacken werfen.','Becken darf sanft mitkippen.','Nur im angenehmen Bewegungsbereich bleiben.'], strengthens:['Wirbelsäule in Beugung und Streckung','Beckenbeweglichkeit','Körperwahrnehmung'], mobilizes:['Brustwirbelsäule','Lendenwirbelsäule','Nacken sanft'] },
  { title:'Adlerarme im Sitzen', image:'assets/20_yoga_adlerarme.webp', seconds:120, tool:'other', yoga:true, tags:['all','shoulders','back','mobility','yoga'], purpose:'Schulterblätter und oberen Rücken öffnen.', steps:['Aufrecht sitzen und beide Arme nach vorn führen.','Einen Arm über den anderen legen und Unterarme möglichst zusammenführen.','Ellbogen sanft anheben, Schultern gleichzeitig sinken lassen.','20–30 Sekunden ruhig atmen, dann Armposition wechseln.'], focus:['Nicht erzwingen, wenn sich die Handflächen nicht berühren.','Nacken lang und Schultern tief halten.','Brustkorb nicht zusammensacken lassen.','Dehnung im oberen Rücken und hinteren Schulterbereich suchen.'], strengthens:['Schulterblattbeweglichkeit','Oberer Rücken','Arm- und Schulterkoordination'], mobilizes:['Hintere Schulter','Trapez- und Rhomboidenbereich','Zwischen den Schulterblättern'] },
  { title:'Sitzende Figur-4-Hüftdehnung', image:'assets/21_yoga_figur4.webp', seconds:120, tool:'other', yoga:true, tags:['all','legs','mobility','yoga'], purpose:'Gesäß und äußere Hüfte beweglicher machen.', steps:['Aufrecht sitzen und einen Fußknöchel auf den gegenüberliegenden Oberschenkel legen.','Knie des aufgelegten Beins entspannt nach außen sinken lassen.','Mit langem Rücken leicht aus der Hüfte nach vorn neigen.','20–30 Sekunden halten, ruhig atmen und Seite wechseln.'], focus:['Nicht auf das Knie drücken.','Rücken möglichst lang halten.','Dehnung soll im Gesäß, nicht im Knie spürbar sein.','Fuß des aufgelegten Beins leicht aktiv halten.'], strengthens:['Hüftbeweglichkeit','Außenrotation der Hüfte','Beckenwahrnehmung'], mobilizes:['Gesäßmuskulatur','Piriformis-Bereich','Äußere Hüfte'] },
  { title:'Mermaid-Seitdehnung im Sitzen', image:'assets/22_yoga_mermaid.webp', seconds:120, tool:'other', yoga:true, tags:['all','back','shoulders','mobility','yoga'], purpose:'Flanken und seitliche Wirbelsäule verlängern.', steps:['Aufrecht sitzen und einen Arm über den Kopf heben.','Andere Hand am Stuhl abstützen.','Oberkörper langsam zur Gegenseite neigen.','In die lange Körperseite atmen, 20–30 Sekunden halten und wechseln.'], focus:['Beide Sitzbeinhöcker möglichst belastet lassen.','Nicht nach vorn einknicken oder verdrehen.','Oberen Arm lang, Schulter aber locker halten.','Seitliche Dehnung statt maximaler Tiefe suchen.'], strengthens:['Seitliche Wirbelsäulenbeweglichkeit','Rippenbeweglichkeit','Schulterbeweglichkeit'], mobilizes:['Latissimus','Flanken','Zwischenrippenmuskulatur'] },
  { title:'Hüftbeuge am Stuhl', image:'assets/23_yoga_hueftbeuge_stuhl.webp', seconds:120, tool:'other', yoga:true, tags:['all','back','legs','mobility','yoga'], purpose:'Rückenlinie und Beinrückseiten sanft verlängern.', steps:['Hinter den stabilen Stuhl stellen und Hände auf die Lehne legen.','Ein bis zwei Schritte zurückgehen.','Hüfte nach hinten schieben und Oberkörper mit langem Rücken nach vorn neigen.','Knie bei Bedarf leicht beugen und 20–30 Sekunden ruhig atmen.'], focus:['Stuhl darf nicht rutschen.','Rücken lang statt rund halten.','Gewicht gleichmäßig auf beide Füße verteilen.','Nur so tief gehen, wie Schultern und Rücken angenehm bleiben.'], strengthens:['Hüftbeugebeweglichkeit','Wirbelsäulenlänge','Schulterbeweglichkeit'], mobilizes:['Beinrückseiten','Latissimus','Rückenstrecker sanft'] },
  { title:'Schulterdehnung am Stuhl', image:'assets/24_yoga_schulterdehnung_stuhl.webp', seconds:120, tool:'other', yoga:true, tags:['all','shoulders','back','mobility','yoga'], purpose:'Schultern, Brustkorb und Latissimus öffnen.', steps:['Stuhl sicher vor dir platzieren und beide Hände auf die Lehne legen.','Mit kleinen Schritten zurückgehen.','Hüfte nach hinten führen und Brustkorb zwischen den Armen absinken lassen.','20–30 Sekunden ruhig in Brustkorb und Achseln atmen.'], focus:['Stuhl stabil und rutschfest aufstellen.','Ellbogen nicht überstrecken.','Nacken in Verlängerung der Wirbelsäule lassen.','Keinen Druck im Schultergelenk erzwingen.'], strengthens:['Schulterflexion','Brustkorbbeweglichkeit','Aufrichtung der Wirbelsäule'], mobilizes:['Latissimus','Brustmuskulatur','Schultergürtel'] },
  { title:'Hüftbeuger-Dehnung am Stuhl', image:'assets/25_yoga_hueftbeuger_stuhl.webp', seconds:120, tool:'other', yoga:true, tags:['all','legs','mobility','yoga'], purpose:'Vordere Hüfte und Oberschenkel nach langem Sitzen öffnen.', steps:['Seitlich hinter den Stuhl stellen und an der Lehne festhalten.','Ein Bein nach hinten setzen, vorderes Knie leicht beugen.','Becken aufrichten und sanft nach vorn-unten sinken lassen.','20–30 Sekunden halten, dann Seite wechseln.'], focus:['Vorderes Knie bleibt über dem Fuß.','Hintere Ferse darf angehoben bleiben.','Becken nicht ins Hohlkreuz kippen.','Stuhl als Balancehilfe verwenden.'], strengthens:['Hüftstreckbeweglichkeit','Beckenposition','Standkontrolle'], mobilizes:['Hüftbeuger','Vordere Oberschenkelregion','Wade des hinteren Beins sanft'] },
  { title:'Unterstütztes Dreieck am Stuhl', image:'assets/26_yoga_dreieck_stuhl.webp', seconds:120, tool:'other', yoga:true, tags:['all','back','legs','mobility','yoga'], purpose:'Seitliche Kette, Beinrückseiten und Brustkorb öffnen.', steps:['Breiten Stand neben dem Stuhl einnehmen.','Eine Hand auf Sitzfläche oder Lehne abstützen.','Oberkörper seitlich verlängern und oberen Arm Richtung Decke führen.','20–30 Sekunden ruhig halten und anschließend Seite wechseln.'], focus:['Beide Beine stabil, Knie nicht durchdrücken.','Nicht auf der unteren Hand abstützen oder zusammensacken.','Brustkorb eher öffnen als maximal tief gehen.','Blick nur nach oben, wenn der Nacken entspannt bleibt.'], strengthens:['Seitliche Rumpfbeweglichkeit','Hüftbeweglichkeit','Brustkorbdrehung'], mobilizes:['Beinrückseiten','Adduktoren','Flanken und Brustkorb'] },
  { title:'Stehende Seitdehnung', image:'assets/27_yoga_seitdehnung_stehend.webp', seconds:120, tool:'none', yoga:true, tags:['all','back','shoulders','mobility','yoga'], purpose:'Flanken, Rippen und Schulterlinie im Stand verlängern.', steps:['Füße etwa hüftbreit aufstellen.','Einen Arm lang über den Kopf heben.','Oberkörper langsam zur Gegenseite neigen.','20–30 Sekunden in die gedehnte Seite atmen und wechseln.'], focus:['Gewicht auf beide Füße verteilen.','Becken möglichst mittig halten.','Nicht nach vorn oder hinten ausweichen.','Bei Unsicherheit Stuhl in Reichweite aufstellen.'], strengthens:['Seitliche Beweglichkeit','Rippenbewegung','Schulterreichweite'], mobilizes:['Flanken','Latissimus','Zwischenrippenmuskulatur'] },
  { title:'Stehende Wirbelsäulenrotation', image:'assets/28_yoga_rotation_stehend.webp', seconds:120, tool:'none', yoga:true, tags:['all','back','shoulders','mobility','yoga'], purpose:'Brustwirbelsäule und Brustkorb sanft rotieren.', steps:['Stabil hüftbreit stehen, Knie locker lassen.','Arme seitlich öffnen.','Oberkörper langsam nach rechts drehen, Becken möglichst nach vorn lassen.','Zur Mitte zurückkehren und zur anderen Seite drehen.','6–10 ruhige Wechsel.'], focus:['Drehung kommt überwiegend aus Brustwirbelsäule und Brustkorb.','Knie und Füße bleiben ruhig.','Nicht ruckartig in die Endposition drehen.','Blick folgt nur so weit, wie der Nacken angenehm bleibt.'], strengthens:['Rotationsbeweglichkeit','Brustkorbbewegung','Koordination von Becken und Oberkörper'], mobilizes:['Brustwirbelsäule','Brustmuskulatur','Schultergürtel'] }

];

const $ = id => document.getElementById(id);
const introView=$('introView'), overviewView=$('overviewView'), exerciseView=$('exerciseView'), exerciseImage=$('exerciseImage'), exerciseCounter=$('exerciseCounter'), exerciseTitle=$('exerciseTitle');
const timerText=$('timerText'), timerLabel=$('timerLabel'), progressBar=$('progressBar'), pauseBtn=$('pauseBtn'), settingsPanel=$('settingsPanel'), helpPanel=$('helpPanel'), donePanel=$('donePanel'), soundToggle=$('soundToggle');
const classicExerciseWrap=$('classicExerciseWrap'), detailExerciseWrap=$('detailExerciseWrap');
let currentIndex=0, sequence=[], sequencePos=0, sequenceDurations=[], timerId=null, totalSeconds=120, remainingSeconds=120, paused=false, wakeLock=null, audioCtx=null;
let timingMode=localStorage.getItem('sttc_timing_mode') || 'fixed';
let soundEnabled=localStorage.getItem('sttc_sound') !== 'false';
let selectedTargets=new Set(['all']);
let selectedMinutes=10;

const toolLabels={none:'Ohne Hilfsmittel',band:'Theraband',dumbbell:'Hanteln',other:'Stuhl / sonstiges'};

function formatTime(seconds){const m=Math.floor(seconds/60).toString().padStart(2,'0');const s=Math.max(0,seconds%60).toString().padStart(2,'0');return `${m}:${s}`;}
function renderTimer(){timerText.textContent=formatTime(remainingSeconds);progressBar.style.width=`${Math.max(0,remainingSeconds/totalSeconds)*100}%`;document.title=`${formatTime(remainingSeconds)} · ${exercises[currentIndex].title}`;}
function stopTimer(){clearInterval(timerId);timerId=null;}
function startTimer(){stopTimer();timerId=setInterval(()=>{if(paused)return;remainingSeconds-=1;renderTimer();if(remainingSeconds<=0){stopTimer();playBeep();setTimeout(()=>goNext(true),450);}},1000);}
function planDuration(index){return timingMode==='fixed'?120:exercises[index].seconds;}

function renderDetail(ex){
  if(ex.classic){classicExerciseWrap.hidden=false;detailExerciseWrap.hidden=true;exerciseImage.src=ex.image;exerciseImage.alt=ex.title;return;}
  classicExerciseWrap.hidden=true; detailExerciseWrap.hidden=false;
  $('detailImage').src=ex.image; $('detailImage').alt=ex.title; $('detailBadge').textContent=ex.yoga?'Master Yoga · '+toolLabels[ex.tool]:toolLabels[ex.tool]; $('detailTitle').textContent=ex.title; $('detailPurpose').textContent=ex.purpose;
  $('detailStrengthTitle').textContent=ex.yoga?'Beweglichkeitsfokus':'Stärkt'; $('detailMobilityTitle').textContent=ex.yoga?'Dehnt / öffnet':'Mobilisiert / dehnt';
  fillList('detailSteps',ex.steps,'ol'); fillList('detailFocus',ex.focus); fillList('detailStrengthens',ex.strengthens); fillList('detailMobilizes',ex.mobilizes);
}
function fillList(id,items){const el=$(id);el.innerHTML='';(items||[]).forEach(t=>{const li=document.createElement('li');li.textContent=t;el.appendChild(li);});}

function showExerciseAt(pos,autoplay=true){
  if(!sequence.length)return;
  sequencePos=Math.max(0,Math.min(sequence.length-1,pos)); currentIndex=sequence[sequencePos]; const ex=exercises[currentIndex];
  overviewView.classList.remove('active'); exerciseView.classList.add('active'); donePanel.hidden=true;
  exerciseCounter.textContent=`${sequencePos+1} / ${sequence.length}`; exerciseTitle.textContent=ex.title; renderDetail(ex);
  totalSeconds=sequenceDurations[sequencePos] || planDuration(currentIndex); remainingSeconds=totalSeconds; paused=false; pauseBtn.textContent='Ⅱ Pause';
  timerLabel.textContent=totalSeconds===120?'Automatisch weiter in':'Automatisch weiter in'; renderTimer(); if(autoplay)startTimer(); requestWakeLock(); window.scrollTo({top:0,behavior:'instant'});
}
function startSequence(indices,durations=null){ensureAudio();sequence=[...indices];sequenceDurations=durations? [...durations] : indices.map(i=>planDuration(i));sequencePos=0;showExerciseAt(0,true);}
function goNext(fromTimer=false){if(sequencePos<sequence.length-1){showExerciseAt(sequencePos+1,true);}else{stopTimer();releaseWakeLock();donePanel.hidden=false;$('doneText').textContent=`Programm beendet · ${sequence.length} Übungen geschafft.`;if(fromTimer)playBeep(880,.18);}}
function goPrev(){if(sequencePos>0)showExerciseAt(sequencePos-1,true);}

function showIntro(){stopTimer();releaseWakeLock();exerciseView.classList.remove('active');overviewView.classList.remove('active');introView.classList.add('active');donePanel.hidden=true;document.title='Stuhl Thai Chi';window.scrollTo({top:0,behavior:'instant'});} 
function enterApp(){introView.classList.remove('active');overviewView.classList.add('active');exerciseView.classList.remove('active');donePanel.hidden=true;document.title='Stuhl Thai Chi';window.scrollTo({top:0,behavior:'instant'});} 
function showOverview(){stopTimer();releaseWakeLock();exerciseView.classList.remove('active');introView.classList.remove('active');overviewView.classList.add('active');donePanel.hidden=true;document.title='Stuhl Thai Chi';window.scrollTo({top:0,behavior:'instant'});}
function togglePause(){paused=!paused;pauseBtn.textContent=paused?'▶ Weiter':'Ⅱ Pause';timerLabel.textContent=paused?'Pausiert':'Automatisch weiter in';}

function openHelp(){helpPanel.hidden=false;}
function closeHelp(){helpPanel.hidden=true;}
function openSettings(){document.querySelectorAll('input[name="timingMode"]').forEach(r=>r.checked=r.value===timingMode);soundToggle.checked=soundEnabled;settingsPanel.hidden=false;}
function closeSettings(){settingsPanel.hidden=true;}
function ensureAudio(){if(!audioCtx){const Ctx=window.AudioContext||window.webkitAudioContext;if(Ctx)audioCtx=new Ctx();}if(audioCtx?.state==='suspended')audioCtx.resume();}
function playBeep(freq=660,seconds=.12){if(!soundEnabled)return;try{ensureAudio();if(!audioCtx)return;const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();osc.frequency.value=freq;gain.gain.setValueAtTime(.0001,audioCtx.currentTime);gain.gain.exponentialRampToValueAtTime(.09,audioCtx.currentTime+.015);gain.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+seconds);osc.connect(gain);gain.connect(audioCtx.destination);osc.start();osc.stop(audioCtx.currentTime+seconds+.02);}catch(_){}}
async function requestWakeLock(){try{if('wakeLock'in navigator&&!wakeLock)wakeLock=await navigator.wakeLock.request('screen');}catch(_){}}
async function releaseWakeLock(){try{await wakeLock?.release();}catch(_){}wakeLock=null;}

function matchesTargets(ex){if(selectedTargets.has('all'))return true;return [...selectedTargets].some(t=>ex.tags.includes(t));}
function allowedTools(){return new Set([...document.querySelectorAll('#toolChooser input:checked')].map(i=>i.value));}
function buildSmartProgram(){
  const tools=allowedTools(); let pool=exercises.map((ex,i)=>({ex,i})).filter(x=>matchesTargets(x.ex)&&tools.has(x.ex.tool));
  if(!pool.length){pool=exercises.map((ex,i)=>({ex,i})).filter(x=>matchesTargets(x.ex));}
  if(selectedTargets.has('yoga')||selectedTargets.has('mobility')) pool.sort((a,b)=>Number(Boolean(b.ex.yoga))-Number(Boolean(a.ex.yoga)));
  const targetSeconds=selectedMinutes*60, base=120, count=Math.ceil(targetSeconds/base);
  // Balance classic/new and avoid consecutive near-duplicates.
  const ranked=[]; const used=new Set();
  const preferredTools=['none','band','dumbbell','other'];
  for(let round=0; ranked.length<count && round<10; round++){
    for(const tool of preferredTools){
      const found=pool.find(x=>!used.has(x.i)&&x.ex.tool===tool);
      if(found){ranked.push(found.i);used.add(found.i);if(ranked.length===count)break;}
    }
  }
  for(const x of pool){if(ranked.length>=count)break;if(!used.has(x.i)){ranked.push(x.i);used.add(x.i);}}
  if(!ranked.length)return;
  const durations=ranked.map(()=>base); const over=count*base-targetSeconds; if(over>0)durations[durations.length-1]=base-over;
  startSequence(ranked,durations);
}

function updateBuilderSummary(){
  const targetNames={all:'Ganzkörper',back:'Rücken',shoulders:'Schulter & Nacken',legs:'Beine & Hüfte',mobility:'Beweglichkeit',activation:'Aktivierung',yoga:'Master Yoga'};
  const names=[...selectedTargets].map(t=>targetNames[t]); const count=Math.ceil(selectedMinutes*60/120);
  $('builderSummary').textContent=`${selectedMinutes} Minuten · ca. ${count} Übungen · ${names.join(' + ')}`;
}

function renderLibrary(){
  const root=$('exerciseLibrary');root.innerHTML='';exercises.forEach((ex,i)=>{
    const b=document.createElement('button');b.type='button';b.className='library-card';b.dataset.index=i;
    b.classList.toggle('yoga-library-card',Boolean(ex.yoga));
    b.innerHTML=`<span class="lib-number">${i+1}</span><img src="${ex.image}" alt="" loading="lazy"><span class="lib-copy"><strong>${ex.title}</strong><small>${toolLabels[ex.tool]} · ${ex.yoga?'Master Yoga':(ex.classic?'Original':'Neu')}</small></span>`;
    b.addEventListener('click',()=>startSequence([i],[120]));root.appendChild(b);
  });
}

document.querySelectorAll('.hotspot').forEach(btn=>btn.addEventListener('click',()=>{const i=Number(btn.dataset.index);startSequence(exercises.slice(i,8).map((_,k)=>i+k));}));
$('startProgramBtn').addEventListener('click',()=>startSequence(exercises.slice(0,8).map((_,i)=>i)));
$('startYogaProgramBtn').addEventListener('click',()=>{const ids=exercises.map((ex,i)=>ex.yoga?i:null).filter(i=>i!==null);startSequence(ids,ids.map(()=>120));});
$('buildProgramBtn').addEventListener('click',buildSmartProgram);
$('introStartBtn').addEventListener('click',enterApp);
$('backBtn').addEventListener('click',showOverview);$('prevBtn').addEventListener('click',goPrev);$('nextBtn').addEventListener('click',()=>goNext(false));pauseBtn.addEventListener('click',togglePause);
$('helpBtn').addEventListener('click',openHelp);$('closeHelpBtn').addEventListener('click',closeHelp);$('helpCloseBottomBtn').addEventListener('click',closeHelp);$('settingsBtn').addEventListener('click',openSettings);$('closeSettingsBtn').addEventListener('click',closeSettings);$('doneOverviewBtn').addEventListener('click',showOverview);
helpPanel.addEventListener('click',e=>{if(e.target===helpPanel)closeHelp();});settingsPanel.addEventListener('click',e=>{if(e.target===settingsPanel)closeSettings();});donePanel.addEventListener('click',e=>{if(e.target===donePanel)showOverview();});

document.querySelectorAll('#targetGrid .choice-card').forEach(btn=>btn.addEventListener('click',()=>{
  const t=btn.dataset.target;
  if(t==='all'){selectedTargets=new Set(['all']);}
  else {selectedTargets.delete('all'); if(selectedTargets.has(t))selectedTargets.delete(t); else selectedTargets.add(t); if(!selectedTargets.size)selectedTargets.add('all');}
  document.querySelectorAll('#targetGrid .choice-card').forEach(b=>b.classList.toggle('selected',selectedTargets.has(b.dataset.target))); updateBuilderSummary();
}));
document.querySelectorAll('#durationChooser button').forEach(btn=>btn.addEventListener('click',()=>{selectedMinutes=Number(btn.dataset.minutes);document.querySelectorAll('#durationChooser button').forEach(b=>b.classList.toggle('selected',b===btn));updateBuilderSummary();}));
document.querySelectorAll('#toolChooser input').forEach(cb=>cb.addEventListener('change',()=>{if(!allowedTools().size)cb.checked=true;}));

document.querySelectorAll('input[name="timingMode"]').forEach(r=>r.addEventListener('change',()=>{timingMode=r.value;localStorage.setItem('sttc_timing_mode',timingMode);}));
soundToggle.addEventListener('change',()=>{soundEnabled=soundToggle.checked;localStorage.setItem('sttc_sound',String(soundEnabled));if(soundEnabled)playBeep();});
$('fullscreenBtn').addEventListener('click',async()=>{try{if(!document.fullscreenElement)await document.documentElement.requestFullscreen();else await document.exitFullscreen();}catch(_){}});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&exerciseView.classList.contains('active'))requestWakeLock();});
if('serviceWorker'in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));}

renderLibrary();updateBuilderSummary();

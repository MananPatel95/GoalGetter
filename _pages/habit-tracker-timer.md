---
layout: page
title: Habit Tracker Timer
permalink: /habit-tracker-timer/
description: Track your habits with our free habit tracker timer. Set custom timers for daily habits and build consistency with visual progress tracking.
keywords: habit tracker timer, habit tracking, daily habits, habit timer, habit building, consistency tracker
---

# Habit Tracker Timer

Track your habits with our free habit tracker timer. Set custom timers for daily habits and build consistency with visual progress tracking.

## Build better habits with timed tracking

Use our habit tracker timer to build consistency and track your daily habits. Set custom timers for different activities and watch your progress grow.

<div class="calculator-container" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 16px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <div class="calculator-header" style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2c3e50; margin-bottom: 10px;">⏱️ Habit Tracker Timer</h3>
    <p style="color: #5a6c7d; font-size: 1.4rem;">Build consistency with timed habit tracking</p>
  </div>
  
  <div class="calculator-inputs" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
      <div>
        <label for="habitName" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Habit Name</label>
        <input type="text" id="habitName" placeholder="e.g., Morning Exercise" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="updateHabitDisplay()">
      </div>
      <div>
        <label for="habitDuration" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Duration (minutes)</label>
        <input type="number" id="habitDuration" min="1" max="1440" value="30" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="updateHabitDisplay()">
      </div>
    </div>
    
    <div style="text-align: center;">
      <button onclick="setQuickHabit('Exercise', 30)" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Exercise (30min)
      </button>
      <button onclick="setQuickHabit('Reading', 20)" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Reading (20min)
      </button>
      <button onclick="setQuickHabit('Meditation', 15)" style="background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease;">
        Meditation (15min)
      </button>
    </div>
  </div>
  
  <div class="timer-display" style="text-align: center; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div id="habitDisplay" style="font-size: 1.8rem; font-weight: 600; color: #2c3e50; margin-bottom: 20px;">
      Set your habit to start tracking
    </div>
    <div id="timerDisplay" style="font-size: 3.6rem; font-weight: 700; color: #2c3e50; margin-bottom: 20px;">
      00:00
    </div>
    <div id="progressBar" style="background: #e9ecef; border-radius: 10px; height: 20px; margin-bottom: 20px; overflow: hidden;">
      <div id="progressFill" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; width: 0%; transition: width 0.3s ease;"></div>
    </div>
    <div id="progressText" style="font-size: 1.2rem; font-weight: 600; color: #2c3e50;">
      Ready to start
    </div>
  </div>
  
  <div class="calculator-actions" style="text-align: center;">
    <button onclick="startTimer()" id="startBtn" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; margin-right: 10px;">
      Start Timer
    </button>
    <button onclick="pauseTimer()" id="pauseBtn" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; margin-right: 10px;">
      Pause
    </button>
    <button onclick="resetTimer()" style="background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer;">
      Reset
    </button>
  </div>
</div>

<script>
let timerInterval;
let isRunning = false;
let isPaused = false;
let timeRemaining = 0;
let totalTime = 0;

function updateHabitDisplay() {
  const habitName = document.getElementById('habitName').value || 'Your Habit';
  const duration = document.getElementById('habitDuration').value || 30;
  document.getElementById('habitDisplay').innerHTML = `Tracking: <strong>${habitName}</strong> (${duration} minutes)`;
}

function setQuickHabit(name, duration) {
  document.getElementById('habitName').value = name;
  document.getElementById('habitDuration').value = duration;
  updateHabitDisplay();
  resetTimer();
}

function startTimer() {
  if (isRunning && !isPaused) return;
  
  const duration = parseInt(document.getElementById('habitDuration').value) || 30;
  
  if (!isPaused) {
    totalTime = duration * 60; // Convert to seconds
    timeRemaining = totalTime;
  }
  
  isRunning = true;
  isPaused = false;
  
  document.getElementById('startBtn').textContent = 'Running...';
  document.getElementById('startBtn').disabled = true;
  document.getElementById('pauseBtn').disabled = false;
  
  timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

function pauseTimer() {
  if (!isRunning) return;
  
  isPaused = !isPaused;
  
  if (isPaused) {
    clearInterval(timerInterval);
    document.getElementById('pauseBtn').textContent = 'Resume';
    document.getElementById('startBtn').textContent = 'Resume';
    document.getElementById('startBtn').disabled = false;
  } else {
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById('pauseBtn').textContent = 'Pause';
    document.getElementById('startBtn').textContent = 'Running...';
    document.getElementById('startBtn').disabled = true;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  isPaused = false;
  timeRemaining = 0;
  totalTime = 0;
  
  document.getElementById('timerDisplay').textContent = '00:00';
  document.getElementById('progressFill').style.width = '0%';
  document.getElementById('progressText').textContent = 'Ready to start';
  document.getElementById('startBtn').textContent = 'Start Timer';
  document.getElementById('startBtn').disabled = false;
  document.getElementById('pauseBtn').textContent = 'Pause';
  document.getElementById('pauseBtn').disabled = true;
}

function updateTimer() {
  if (timeRemaining <= 0) {
    // Timer completed
    clearInterval(timerInterval);
    isRunning = false;
    isPaused = false;
    
    document.getElementById('timerDisplay').textContent = '00:00';
    document.getElementById('progressFill').style.width = '100%';
    document.getElementById('progressText').innerHTML = '🎉 <strong>Habit completed!</strong>';
    document.getElementById('startBtn').textContent = 'Start Timer';
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    
    // Show completion message
    alert('Great job! You completed your habit session!');
    return;
  }
  
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  document.getElementById('timerDisplay').textContent = displayTime;
  
  // Update progress
  const progress = ((totalTime - timeRemaining) / totalTime) * 100;
  document.getElementById('progressFill').style.width = `${progress}%`;
  document.getElementById('progressText').textContent = `${Math.round(progress)}% complete`;
  
  timeRemaining--;
}

function shareProgress() {
  const habitName = document.getElementById('habitName').value || 'My Habit';
  const duration = document.getElementById('habitDuration').value || 30;
  
  const shareText = `I'm tracking my "${habitName}" habit for ${duration} minutes! Join me in building better habits: ${window.location.href}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Habit Tracker Timer',
      text: shareText,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Progress shared to clipboard!');
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  updateHabitDisplay();
  document.getElementById('pauseBtn').disabled = true;
});
</script>

## Features

- **Custom habit tracking** - Set any habit name and duration
- **Visual progress bar** - See your progress in real-time
- **Quick habit presets** - Common habits with suggested durations
- **Pause/Resume** - Control your timer as needed
- **Completion celebration** - Get motivated when you finish
- **Share progress** - Share your habit tracking with others

## How to use

1. **Set your habit** - Enter the habit name and duration
2. **Start tracking** - Click start to begin your timer
3. **Stay focused** - Watch your progress bar fill up
4. **Complete your habit** - Celebrate when you finish!

## Perfect for

- **Daily habits** - Build consistency with daily routines
- **Exercise tracking** - Time your workout sessions
- **Study sessions** - Track focused study time
- **Meditation** - Time your mindfulness practice
- **Reading** - Track daily reading time
- **Skill building** - Practice new skills with timed sessions

## Tips

- **Start small** - Begin with shorter durations and build up
- **Be consistent** - Use the timer daily for best results
- **Track progress** - Monitor your habit completion over time
- **Stay motivated** - Use the visual progress to stay engaged

---

*Build better habits and achieve your goals with Goal Getter's comprehensive habit tracking and goal management features.*
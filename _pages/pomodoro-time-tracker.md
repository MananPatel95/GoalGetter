---
layout: page
title: Pomodoro Time Tracker
permalink: /tools/pomodoro-time-tracker/
description: Boost productivity with our free Pomodoro time tracker. Work in focused 25-minute sessions with 5-minute breaks. Includes tab focus management and notifications.
keywords: pomodoro timer, pomodoro technique, productivity timer, focus timer, work timer, time management, tab focus
---

# Pomodoro Time Tracker

Boost productivity with our free Pomodoro time tracker. Work in focused 25-minute sessions with 5-minute breaks. Includes tab focus management and notifications.

## Master the Pomodoro Technique

Use our advanced Pomodoro timer to work in focused 25-minute sessions followed by short breaks. The timer automatically manages tab focus and provides notifications to keep you on track.

<div class="calculator-container" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 16px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <div class="calculator-header" style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2c3e50; margin-bottom: 10px;">🍅 Pomodoro Time Tracker</h3>
    <p style="color: #5a6c7d; font-size: 1.4rem;">Work in focused 25-minute sessions with smart break management</p>
  </div>
  
  <div class="pomodoro-controls" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 20px;">
      <div>
        <label for="workDuration" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Work Duration (min)</label>
        <input type="number" id="workDuration" min="5" max="60" value="25" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="updateSettings()">
      </div>
      <div>
        <label for="breakDuration" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Break Duration (min)</label>
        <input type="number" id="breakDuration" min="1" max="30" value="5" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="updateSettings()">
      </div>
      <div>
        <label for="longBreakDuration" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Long Break (min)</label>
        <input type="number" id="longBreakDuration" min="5" max="60" value="15" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="updateSettings()">
      </div>
    </div>
    
    <div style="text-align: center;">
      <label style="display: inline-flex; align-items: center; font-weight: 600; color: #2c3e50; cursor: pointer;">
        <input type="checkbox" id="tabFocus" checked style="margin-right: 8px; transform: scale(1.2);">
        Enable Tab Focus Management
      </label>
    </div>
  </div>
  
  <div class="timer-display" style="text-align: center; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div id="sessionType" style="font-size: 1.8rem; font-weight: 600; color: #2c3e50; margin-bottom: 20px;">
      Ready to start
    </div>
    <div id="timerDisplay" style="font-size: 4.8rem; font-weight: 700; color: #2c3e50; margin-bottom: 20px;">
      25:00
    </div>
    <div id="progressBar" style="background: #e9ecef; border-radius: 10px; height: 20px; margin-bottom: 20px; overflow: hidden;">
      <div id="progressFill" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 100%; width: 0%; transition: width 0.3s ease;"></div>
    </div>
    <div id="sessionInfo" style="font-size: 1.2rem; font-weight: 600; color: #2c3e50;">
      Session 1 of 4
    </div>
  </div>
  
  <div class="calculator-actions" style="text-align: center;">
    <button onclick="startPomodoro()" id="startBtn" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; margin-right: 10px;">
      Start Pomodoro
    </button>
    <button onclick="pausePomodoro()" id="pauseBtn" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; margin-right: 10px;">
      Pause
    </button>
    <button onclick="resetPomodoro()" style="background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer;">
      Reset
    </button>
  </div>
</div>

<script>
let pomodoroInterval;
let isRunning = false;
let isPaused = false;
let timeRemaining = 0;
let totalTime = 0;
let currentSession = 1;
let isWorkSession = true;
let originalTitle = document.title;

function updateSettings() {
  if (!isRunning) {
    const workDuration = parseInt(document.getElementById('workDuration').value) || 25;
    document.getElementById('timerDisplay').textContent = `${workDuration.toString().padStart(2, '0')}:00`;
  }
}

function startPomodoro() {
  if (isRunning && !isPaused) return;
  
  const workDuration = parseInt(document.getElementById('workDuration').value) || 25;
  const breakDuration = parseInt(document.getElementById('breakDuration').value) || 5;
  
  if (!isPaused) {
    totalTime = workDuration * 60; // Convert to seconds
    timeRemaining = totalTime;
    isWorkSession = true;
    currentSession = 1;
  }
  
  isRunning = true;
  isPaused = false;
  
  document.getElementById('startBtn').textContent = 'Running...';
  document.getElementById('startBtn').disabled = true;
  document.getElementById('pauseBtn').disabled = false;
  
  updateSessionDisplay();
  pomodoroInterval = setInterval(updatePomodoro, 1000);
  updatePomodoro();
  
  // Enable tab focus if checked
  if (document.getElementById('tabFocus').checked) {
    requestNotificationPermission();
  }
}

function pausePomodoro() {
  if (!isRunning) return;
  
  isPaused = !isPaused;
  
  if (isPaused) {
    clearInterval(pomodoroInterval);
    document.getElementById('pauseBtn').textContent = 'Resume';
    document.getElementById('startBtn').textContent = 'Resume';
    document.getElementById('startBtn').disabled = false;
    document.title = `⏸️ ${originalTitle}`;
  } else {
    pomodoroInterval = setInterval(updatePomodoro, 1000);
    document.getElementById('pauseBtn').textContent = 'Pause';
    document.getElementById('startBtn').textContent = 'Running...';
    document.getElementById('startBtn').disabled = true;
    updateTabTitle();
  }
}

function resetPomodoro() {
  clearInterval(pomodoroInterval);
  isRunning = false;
  isPaused = false;
  timeRemaining = 0;
  totalTime = 0;
  currentSession = 1;
  isWorkSession = true;
  
  const workDuration = parseInt(document.getElementById('workDuration').value) || 25;
  document.getElementById('timerDisplay').textContent = `${workDuration.toString().padStart(2, '0')}:00`;
  document.getElementById('progressFill').style.width = '0%';
  document.getElementById('sessionType').textContent = 'Ready to start';
  document.getElementById('sessionInfo').textContent = 'Session 1 of 4';
  document.getElementById('startBtn').textContent = 'Start Pomodoro';
  document.getElementById('startBtn').disabled = false;
  document.getElementById('pauseBtn').textContent = 'Pause';
  document.getElementById('pauseBtn').disabled = true;
  document.title = originalTitle;
}

function updatePomodoro() {
  if (timeRemaining <= 0) {
    // Session completed
    clearInterval(pomodoroInterval);
    isRunning = false;
    isPaused = false;
    
    if (isWorkSession) {
      // Work session completed
      currentSession++;
      if (currentSession <= 4) {
        // Start break
        startBreak();
      } else {
        // All sessions completed, start long break
        startLongBreak();
      }
    } else {
      // Break completed, start next work session
      if (currentSession <= 4) {
        startWorkSession();
      } else {
        // All sessions completed
        completeAllSessions();
      }
    }
    return;
  }
  
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  document.getElementById('timerDisplay').textContent = displayTime;
  
  // Update progress
  const progress = ((totalTime - timeRemaining) / totalTime) * 100;
  document.getElementById('progressFill').style.width = `${progress}%`;
  
  // Update tab title
  updateTabTitle();
  
  timeRemaining--;
}

function startWorkSession() {
  const workDuration = parseInt(document.getElementById('workDuration').value) || 25;
  totalTime = workDuration * 60;
  timeRemaining = totalTime;
  isWorkSession = true;
  
  document.getElementById('sessionType').textContent = '🍅 Work Session';
  document.getElementById('sessionInfo').textContent = `Session ${currentSession} of 4`;
  
  // Show notification
  if (document.getElementById('tabFocus').checked) {
    showNotification('Work Session Started', 'Time to focus! Let\'s get productive.');
  }
  
  // Start timer
  isRunning = true;
  pomodoroInterval = setInterval(updatePomodoro, 1000);
  updatePomodoro();
}

function startBreak() {
  const breakDuration = parseInt(document.getElementById('breakDuration').value) || 5;
  totalTime = breakDuration * 60;
  timeRemaining = totalTime;
  isWorkSession = false;
  
  document.getElementById('sessionType').textContent = '☕ Short Break';
  document.getElementById('sessionInfo').textContent = `Break after session ${currentSession - 1}`;
  
  // Show notification
  if (document.getElementById('tabFocus').checked) {
    showNotification('Break Time!', 'Take a well-deserved break.');
  }
  
  // Start timer
  isRunning = true;
  pomodoroInterval = setInterval(updatePomodoro, 1000);
  updatePomodoro();
}

function startLongBreak() {
  const longBreakDuration = parseInt(document.getElementById('longBreakDuration').value) || 15;
  totalTime = longBreakDuration * 60;
  timeRemaining = totalTime;
  isWorkSession = false;
  
  document.getElementById('sessionType').textContent = '🎉 Long Break';
  document.getElementById('sessionInfo').textContent = 'All sessions completed!';
  
  // Show notification
  if (document.getElementById('tabFocus').checked) {
    showNotification('Long Break!', 'Great job! Take a longer break.');
  }
  
  // Start timer
  isRunning = true;
  pomodoroInterval = setInterval(updatePomodoro, 1000);
  updatePomodoro();
}

function completeAllSessions() {
  document.getElementById('timerDisplay').textContent = '00:00';
  document.getElementById('progressFill').style.width = '100%';
  document.getElementById('sessionType').innerHTML = '🎉 <strong>All Sessions Complete!</strong>';
  document.getElementById('sessionInfo').textContent = 'Great work! You completed 4 Pomodoro sessions.';
  document.getElementById('startBtn').textContent = 'Start New Cycle';
  document.getElementById('startBtn').disabled = false;
  document.getElementById('pauseBtn').disabled = true;
  document.title = `🎉 ${originalTitle}`;
  
  // Show completion notification
  if (document.getElementById('tabFocus').checked) {
    showNotification('All Sessions Complete!', 'Congratulations! You completed 4 Pomodoro sessions.');
  }
  
  // Reset for new cycle
  currentSession = 1;
}

function updateSessionDisplay() {
  if (isWorkSession) {
    document.getElementById('sessionType').textContent = '🍅 Work Session';
    document.getElementById('sessionInfo').textContent = `Session ${currentSession} of 4`;
  } else {
    document.getElementById('sessionType').textContent = '☕ Break Time';
    document.getElementById('sessionInfo').textContent = `Break after session ${currentSession - 1}`;
  }
}

function updateTabTitle() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  if (isWorkSession) {
    document.title = `🍅 ${displayTime} - ${originalTitle}`;
  } else {
    document.title = `☕ ${displayTime} - ${originalTitle}`;
  }
}

function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
}

function showNotification(title, body) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body: body, icon: '/favicon.ico' });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  updateSettings();
  document.getElementById('pauseBtn').disabled = true;
  
  // Request notification permission on load
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
});
</script>

## Features

- **Customizable durations** - Set work, break, and long break times
- **Tab focus management** - Timer updates in browser tab title
- **Session tracking** - Complete 4 work sessions with breaks
- **Smart notifications** - Get notified when sessions start/end
- **Visual progress** - See your progress with a progress bar
- **Pause/Resume** - Control your Pomodoro sessions
- **Auto-cycling** - Automatically move between work and break sessions

## How to use

1. **Set your durations** - Choose work, break, and long break times
2. **Start your first session** - Click start to begin a 25-minute work session
3. **Take breaks** - Automatic breaks between work sessions
4. **Complete the cycle** - Finish 4 work sessions for a long break
5. **Repeat** - Start a new cycle to continue productivity

## Perfect for

- **Focused work** - Deep work sessions without distractions
- **Study sessions** - Structured study time with breaks
- **Creative work** - Time-boxed creative sessions
- **Task completion** - Break large tasks into manageable chunks
- **Productivity improvement** - Build better work habits

## Tips

- **Eliminate distractions** - Close unnecessary tabs and apps
- **Use breaks wisely** - Step away from your computer during breaks
- **Track your sessions** - Monitor your productivity patterns
- **Stay consistent** - Use the Pomodoro technique daily for best results

---

*Boost your productivity and achieve your goals with Goal Getter's comprehensive time management and goal tracking features.*

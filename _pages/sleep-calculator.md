---
layout: page
title: Sleep Calculator
permalink: /sleep-calculator/
description: Calculate your optimal sleep schedule and track your sleep patterns with our free sleep calculator.
keywords: sleep calculator, sleep schedule, sleep cycles, bedtime calculator, sleep optimization, sleep tracking
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Sleep Calculator",
  "description": "Calculate your optimal sleep schedule based on 90-minute sleep cycles",
  "url": "https://goalgetter.app/tools/sleep-calculator/",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "Goal Getter"
  }
}
</script>

# Sleep Calculator

Calculate your optimal sleep schedule and track your sleep patterns with our free sleep calculator.

## What time should I go to bed?

Optimize your sleep schedule with our comprehensive sleep calculator. Perfect for improving sleep quality and establishing healthy sleep habits.

<div class="calculator-container" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 16px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <div class="calculator-header" style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2c3e50; margin-bottom: 10px;">😴 Sleep Calculator</h3>
    <p style="color: #5a6c7d; font-size: 1.4rem;">Calculate your optimal sleep schedule based on 90-minute sleep cycles</p>
  </div>
  
  <div class="calculator-inputs" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
      <div>
        <label for="wakeTime" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Desired Wake Time</label>
        <input type="time" id="wakeTime" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateSleepSchedule()">
      </div>
      <div>
        <label for="sleepDuration" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Sleep Duration</label>
        <select id="sleepDuration" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateSleepSchedule()">
          <option value="7.5">7.5 hours (5 cycles) - Recommended</option>
          <option value="9">9 hours (6 cycles) - Optimal</option>
          <option value="6">6 hours (4 cycles) - Minimum</option>
          <option value="4.5">4.5 hours (3 cycles) - Short</option>
          <option value="custom">Custom duration</option>
        </select>
      </div>
    </div>
    
    <div id="customDuration" style="display: none; margin-bottom: 20px;">
      <label for="customHours" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Custom Hours</label>
      <input type="number" id="customHours" min="1" max="12" step="0.5" value="7.5" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateSleepSchedule()">
    </div>
    
    <div style="text-align: center;">
      <button onclick="setToNow()" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Use Current Time
      </button>
      <button onclick="setToMorning()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease;">
        7:00 AM
      </button>
    </div>
  </div>
  
  <div class="result-display" style="text-align: center; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div id="sleepResult" style="font-size: 2.4rem; font-weight: 700; color: #2c3e50; margin-bottom: 20px;">
      Enter your wake time to see recommended bedtimes
    </div>
    <div id="bedtimeOptions" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
      <!-- Bedtime options will be inserted here -->
    </div>
  </div>
  
  <div class="sleep-info" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <h4 style="color: #2c3e50; margin-bottom: 20px; text-align: center;">Sleep Cycle Information</h4>
    <div id="sleepCycles" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
      <!-- Sleep cycle info will be inserted here -->
    </div>
  </div>
  
  <div class="calculator-actions" style="text-align: center;">
    <button onclick="shareResult()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer;">
      Share Result
    </button>
  </div>
</div>

<script>
function calculateSleepSchedule() {
  const wakeTime = document.getElementById('wakeTime').value;
  const sleepDuration = document.getElementById('sleepDuration').value;
  
  if (!wakeTime) {
    document.getElementById('sleepResult').innerHTML = 'Enter your wake time to see recommended bedtimes';
    document.getElementById('bedtimeOptions').innerHTML = '';
    document.getElementById('sleepCycles').innerHTML = '';
    return;
  }
  
  // Get wake time as Date object
  const wakeDate = new Date();
  const [wakeHours, wakeMinutes] = wakeTime.split(':');
  wakeDate.setHours(parseInt(wakeHours), parseInt(wakeMinutes), 0, 0);
  
  // Calculate sleep duration
  let hours;
  if (sleepDuration === 'custom') {
    hours = parseFloat(document.getElementById('customHours').value) || 7.5;
  } else {
    hours = parseFloat(sleepDuration);
  }
  
  // Calculate bedtime (wake time - sleep duration)
  const bedtime = new Date(wakeDate.getTime() - (hours * 60 * 60 * 1000));
  
  // Calculate sleep cycles (90 minutes each)
  const cycles = Math.round(hours * 60 / 90);
  const actualHours = (cycles * 90) / 60;
  
  // Update main result
  const wakeTimeString = wakeDate.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  const bedtimeString = bedtime.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  
  document.getElementById('sleepResult').innerHTML = `For ${wakeTimeString} wake time, go to bed at ${bedtimeString}`;
  
  // Create bedtime options (multiple cycles)
  const options = [];
  for (let i = 3; i <= 6; i++) {
    const optionHours = (i * 90) / 60;
    const optionBedtime = new Date(wakeDate.getTime() - (optionHours * 60 * 60 * 1000));
    const optionString = optionBedtime.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
    
    let recommendation = '';
    if (i === 5) recommendation = ' (Recommended)';
    else if (i === 6) recommendation = ' (Optimal)';
    else if (i === 4) recommendation = ' (Minimum)';
    
    options.push({
      time: optionString,
      cycles: i,
      hours: optionHours,
      recommendation: recommendation
    });
  }
  
  let optionsHTML = '';
  options.forEach(option => {
    const isSelected = Math.abs(option.hours - hours) < 0.1;
    const selectedStyle = isSelected ? 'border: 2px solid #667eea; background: #f8f9ff;' : 'border: 1px solid #e9ecef;';
    
    optionsHTML += `
      <div style="${selectedStyle} padding: 15px; border-radius: 8px; text-align: center;">
        <div style="font-size: 1.8rem; font-weight: 700; color: #2c3e50; margin-bottom: 8px;">${option.time}</div>
        <div style="font-size: 1.2rem; color: #6c757d; margin-bottom: 4px;">${option.cycles} cycles (${option.hours}h)</div>
        <div style="font-size: 1rem; color: #667eea; font-weight: 600;">${option.recommendation}</div>
      </div>
    `;
  });
  
  document.getElementById('bedtimeOptions').innerHTML = optionsHTML;
  
  // Create sleep cycle information
  const cycleInfo = `
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
      <div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Sleep Cycles</div>
      <div style="font-size: 2rem; font-weight: 700; color: #4ecdc4;">${cycles}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
      <div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Cycle Duration</div>
      <div style="font-size: 2rem; font-weight: 700; color: #667eea;">90 min</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
      <div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Total Sleep</div>
      <div style="font-size: 2rem; font-weight: 700; color: #4ecdc4;">${actualHours}h</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
      <div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Sleep Quality</div>
      <div style="font-size: 2rem; font-weight: 700; color: #667eea;">${getSleepQuality(cycles)}</div>
    </div>
  `;
  
  document.getElementById('sleepCycles').innerHTML = cycleInfo;
}

function getSleepQuality(cycles) {
  if (cycles >= 6) return 'Excellent';
  if (cycles >= 5) return 'Good';
  if (cycles >= 4) return 'Fair';
  return 'Poor';
}

function setToNow() {
  const now = new Date();
  const timeString = now.toTimeString().split(' ')[0].substring(0, 5);
  document.getElementById('wakeTime').value = timeString;
  calculateSleepSchedule();
}

function setToMorning() {
  document.getElementById('wakeTime').value = '07:00';
  calculateSleepSchedule();
}

function shareResult() {
  const wakeTime = document.getElementById('wakeTime').value;
  const sleepDuration = document.getElementById('sleepDuration').value;
  
  if (!wakeTime) {
    alert('Please enter your wake time first');
    return;
  }
  
  const wakeDate = new Date();
  const [wakeHours, wakeMinutes] = wakeTime.split(':');
  wakeDate.setHours(parseInt(wakeHours), parseInt(wakeMinutes), 0, 0);
  
  let hours;
  if (sleepDuration === 'custom') {
    hours = parseFloat(document.getElementById('customHours').value) || 7.5;
  } else {
    hours = parseFloat(sleepDuration);
  }
  
  const bedtime = new Date(wakeDate.getTime() - (hours * 60 * 60 * 1000));
  const wakeTimeString = wakeDate.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  const bedtimeString = bedtime.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  
  const cycles = Math.round(hours * 60 / 90);
  
  const shareText = `For optimal sleep, I should go to bed at ${bedtimeString} to wake up at ${wakeTimeString} (${cycles} sleep cycles). Calculate your sleep schedule: ${window.location.href}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Sleep Calculator',
      text: shareText,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Result copied to clipboard!');
    });
  }
}

// Show/hide custom duration input
document.getElementById('sleepDuration').addEventListener('change', function() {
  const customDiv = document.getElementById('customDuration');
  if (this.value === 'custom') {
    customDiv.style.display = 'block';
  } else {
    customDiv.style.display = 'none';
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  setToNow();
});
</script>

### Features:
- **Sleep cycle calculation** - Based on 90-minute sleep cycles
- **Optimal wake times** - Find your best wake-up times
- **Bedtime recommendations** - When to go to sleep
- **Sleep quality tracking** - Monitor your sleep patterns

### How to use:
1. Enter your desired wake-up time
2. See recommended bedtimes
3. Track your sleep schedule
4. Monitor sleep quality

### Sleep cycle science:
- **90-minute cycles** - Complete sleep cycles
- **REM sleep** - Dream and memory consolidation
- **Deep sleep** - Physical restoration
- **Light sleep** - Transition between stages

### Optimal sleep times:
- **7.5 hours** - 5 complete cycles
- **9 hours** - 6 complete cycles
- **6 hours** - 4 complete cycles
- **4.5 hours** - 3 complete cycles

### Sleep hygiene tips:
- **Consistent schedule** - Go to bed and wake up at the same time
- **Bedroom environment** - Cool, dark, and quiet
- **Pre-sleep routine** - Wind down before bed
- **Limit screens** - Avoid blue light before sleep

### Track with Goal Getter:
- **Sleep goals** - Set consistent bedtime targets
- **Sleep streaks** - Track consecutive good nights
- **Sleep quality** - Monitor how you feel each morning
- **Sleep habits** - Track pre-sleep routines

### Common sleep problems:
- **Insomnia** - Difficulty falling or staying asleep
- **Sleep apnea** - Breathing interruptions during sleep
- **Restless legs** - Uncomfortable sensations in legs
- **Nightmares** - Disturbing dreams affecting sleep

---

*Improve your sleep quality and establish healthy sleep habits with Goal Getter's comprehensive tracking features.*

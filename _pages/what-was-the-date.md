---
layout: page
title: What Was the Date Calculator
permalink: /tools/what-was-the-date/
---

# What Was the Date Calculator

Find out what day of the week any historical date fell on with our free date calculator.

## What day was that date?

Discover what day of the week any past date fell on. Perfect for historical research, anniversary planning, and date verification.

<div class="calculator-container" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 16px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <div class="calculator-header" style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2c3e50; margin-bottom: 10px;">📅 What Was the Date Calculator</h3>
    <p style="color: #5a6c7d; font-size: 1.4rem;">Find out what day of the week any historical date fell on</p>
  </div>
  
  <div class="calculator-inputs" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
      <div>
        <label for="targetDate" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Historical Date</label>
        <input type="date" id="targetDate" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateDayOfWeek()">
      </div>
      <div>
        <label for="dateType" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Date Type</label>
        <select id="dateType" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateDayOfWeek()">
          <option value="gregorian">Gregorian Calendar</option>
          <option value="julian">Julian Calendar</option>
        </select>
      </div>
    </div>
    
    <div style="text-align: center;">
      <button onclick="setToMoonLanding()" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Moon Landing
      </button>
      <button onclick="setTo911()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        9/11 Attacks
      </button>
      <button onclick="setToPearlHarbor()" style="background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease;">
        Pearl Harbor
      </button>
    </div>
  </div>
  
  <div class="result-display" style="text-align: center; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div id="result" style="font-size: 2.4rem; font-weight: 700; color: #2c3e50; margin-bottom: 20px;">
      Select a date to find the day of the week
    </div>
    <div id="detailedBreakdown" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
      <!-- Detailed breakdown will be inserted here -->
    </div>
  </div>
  
  <div class="calculator-actions" style="text-align: center;">
    <button onclick="shareResult()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer;">
      Share Result
    </button>
  </div>
</div>

<script>
function calculateDayOfWeek() {
  const targetDate = document.getElementById('targetDate').value;
  const dateType = document.getElementById('dateType').value;
  
  if (!targetDate) {
    document.getElementById('result').innerHTML = 'Select a date to find the day of the week';
    document.getElementById('detailedBreakdown').innerHTML = '';
    return;
  }
  
  const date = new Date(targetDate);
  
  if (isNaN(date.getTime())) {
    document.getElementById('result').innerHTML = 'Invalid date selected';
    document.getElementById('detailedBreakdown').innerHTML = '';
    return;
  }
  
  // Get day of week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[date.getDay()];
  
  // Get additional date information
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfYear = Math.floor((date - new Date(year, 0, 0)) / (1000 * 60 * 60 * 24));
  const weekOfYear = Math.ceil(dayOfYear / 7);
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
  // Calculate age if it's a past date
  const now = new Date();
  const ageInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  const ageInYears = Math.floor(ageInDays / 365.25);
  
  // Update main result
  document.getElementById('result').innerHTML = `${dayOfWeek}`;
  
  // Create detailed breakdown
  const breakdown = `
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Full Date</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #667eea;">${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Year</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #4ecdc4;">${year}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Day of Year</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #667eea;">${dayOfYear}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Week of Year</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #4ecdc4;">${weekOfYear}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Leap Year</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #667eea;">${isLeapYear ? 'Yes' : 'No'}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Age (Years)</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #4ecdc4;">${ageInYears}</div>
    </div>
  `;
  
  document.getElementById('detailedBreakdown').innerHTML = breakdown;
}

function setToMoonLanding() {
  document.getElementById('targetDate').value = '1969-07-20';
  document.getElementById('dateType').value = 'gregorian';
  calculateDayOfWeek();
}

function setTo911() {
  document.getElementById('targetDate').value = '2001-09-11';
  document.getElementById('dateType').value = 'gregorian';
  calculateDayOfWeek();
}

function setToPearlHarbor() {
  document.getElementById('targetDate').value = '1941-12-07';
  document.getElementById('dateType').value = 'gregorian';
  calculateDayOfWeek();
}

function shareResult() {
  const targetDate = document.getElementById('targetDate').value;
  
  if (!targetDate) {
    alert('Please select a date first');
    return;
  }
  
  const date = new Date(targetDate);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const fullDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  const shareText = `${fullDate} was a ${dayOfWeek}. Find out what day any date was: ${window.location.href}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'What Was the Date Calculator',
      text: shareText,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Result copied to clipboard!');
    });
  }
}

// Initialize with today's date
document.addEventListener('DOMContentLoaded', function() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('targetDate').value = today;
  calculateDayOfWeek();
});
</script>

### Features:
- **Day of week calculation** - Find any day of the week
- **Historical dates** - Works for any past date
- **Multiple formats** - Various date input options
- **Instant results** - Get answers immediately

### How to use:
1. Enter any historical date
2. See what day of the week it was
3. Get additional date information
4. Verify historical events

### Common uses:
- **Historical research** - Verify dates in history
- **Anniversary planning** - Find special dates
- **Birthday verification** - Check birth day of week
- **Event planning** - Plan around specific days

### Historical date examples:
- **July 20, 1969** - Moon landing
- **September 11, 2001** - 9/11 attacks
- **December 7, 1941** - Pearl Harbor
- **November 22, 1963** - JFK assassination

### Day of week patterns:
- **Monday** - Start of work week
- **Tuesday** - Second day of week
- **Wednesday** - Mid-week day
- **Thursday** - Almost weekend
- **Friday** - End of work week
- **Saturday** - Weekend day
- **Sunday** - Day of rest

### Calendar systems:
- **Gregorian calendar** - Current calendar system
- **Julian calendar** - Historical calendar
- **Leap years** - Account for February 29th
- **Calendar reforms** - Historical calendar changes

### Fun facts:
- **Zeller's congruence** - Algorithm for day calculation
- **Perpetual calendars** - Reusable calendar systems
- **Doomsday rule** - Mental calculation method
- **Calendar algorithms** - Mathematical date calculations

---

*Track important dates and historical events with Goal Getter's comprehensive date tracking and goal management features.*

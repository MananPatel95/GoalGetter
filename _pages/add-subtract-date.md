---
layout: page
title: Add to or Subtract from a Date
permalink: /tools/add-subtract-date/
---

# Add to or Subtract from a Date Calculator

Add or subtract days, weeks, months, or years from any date with our free date calculator.

## What date is X days from now?

Calculate future or past dates by adding or subtracting time periods. Perfect for project planning, deadline tracking, and date calculations.

<div class="calculator-container" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 16px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <div class="calculator-header" style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2c3e50; margin-bottom: 10px;">📅 Add/Subtract Date Calculator</h3>
    <p style="color: #5a6c7d; font-size: 1.4rem;">Add or subtract days, weeks, months, or years from any date</p>
  </div>
  
  <div class="calculator-inputs" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
      <div>
        <label for="startDate" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Starting Date</label>
        <input type="date" id="startDate" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateDate()">
      </div>
      <div>
        <label for="operation" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Operation</label>
        <select id="operation" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateDate()">
          <option value="add">Add to date</option>
          <option value="subtract">Subtract from date</option>
        </select>
      </div>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 20px;">
      <div>
        <label for="days" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Days</label>
        <input type="number" id="days" min="0" value="0" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateDate()">
      </div>
      <div>
        <label for="weeks" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Weeks</label>
        <input type="number" id="weeks" min="0" value="0" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateDate()">
      </div>
      <div>
        <label for="months" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Months</label>
        <input type="number" id="months" min="0" value="0" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateDate()">
      </div>
      <div>
        <label for="years" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Years</label>
        <input type="number" id="years" min="0" value="0" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateDate()">
      </div>
    </div>
    
    <div style="text-align: center;">
      <button onclick="setToToday()" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Use Today
      </button>
      <button onclick="setToNewYear()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        New Year
      </button>
      <button onclick="clearAll()" style="background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease;">
        Clear All
      </button>
    </div>
  </div>
  
  <div class="result-display" style="text-align: center; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div id="result" style="font-size: 2.4rem; font-weight: 700; color: #2c3e50; margin-bottom: 20px;">
      Select a date and time period to calculate
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
function calculateDate() {
  const startDate = document.getElementById('startDate').value;
  const operation = document.getElementById('operation').value;
  const days = parseInt(document.getElementById('days').value) || 0;
  const weeks = parseInt(document.getElementById('weeks').value) || 0;
  const months = parseInt(document.getElementById('months').value) || 0;
  const years = parseInt(document.getElementById('years').value) || 0;
  
  if (!startDate) {
    document.getElementById('result').innerHTML = 'Select a starting date to calculate';
    document.getElementById('detailedBreakdown').innerHTML = '';
    return;
  }
  
  if (days === 0 && weeks === 0 && months === 0 && years === 0) {
    document.getElementById('result').innerHTML = 'Enter time periods to add or subtract';
    document.getElementById('detailedBreakdown').innerHTML = '';
    return;
  }
  
  const start = new Date(startDate);
  const result = new Date(start);
  
  // Calculate total days to add/subtract
  const totalDays = days + (weeks * 7);
  const multiplier = operation === 'add' ? 1 : -1;
  
  // Add/subtract years
  if (years > 0) {
    result.setFullYear(result.getFullYear() + (years * multiplier));
  }
  
  // Add/subtract months
  if (months > 0) {
    result.setMonth(result.getMonth() + (months * multiplier));
  }
  
  // Add/subtract days
  if (totalDays > 0) {
    result.setDate(result.getDate() + (totalDays * multiplier));
  }
  
  // Format the result
  const resultString = result.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Update main result
  const operationText = operation === 'add' ? 'after' : 'before';
  document.getElementById('result').innerHTML = `${resultString}`;
  
  // Create detailed breakdown
  const breakdown = `
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Original Date</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #667eea;">${start.toLocaleDateString()}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Operation</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #4ecdc4;">${operation === 'add' ? 'Add' : 'Subtract'}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Time Period</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #667eea;">${years}y ${months}m ${weeks}w ${days}d</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Total Days</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #4ecdc4;">${totalDays + (years * 365.25) + (months * 30.44)}</div>
    </div>
  `;
  
  document.getElementById('detailedBreakdown').innerHTML = breakdown;
}

function setToToday() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('startDate').value = today;
  document.getElementById('days').value = '1';
  calculateDate();
}

function setToNewYear() {
  const nextYear = new Date().getFullYear() + 1;
  const nextYearString = nextYear + '-01-01';
  document.getElementById('startDate').value = nextYearString;
  document.getElementById('years').value = '1';
  calculateDate();
}

function clearAll() {
  document.getElementById('days').value = '0';
  document.getElementById('weeks').value = '0';
  document.getElementById('months').value = '0';
  document.getElementById('years').value = '0';
  calculateDate();
}

function shareResult() {
  const startDate = document.getElementById('startDate').value;
  const operation = document.getElementById('operation').value;
  const days = parseInt(document.getElementById('days').value) || 0;
  const weeks = parseInt(document.getElementById('weeks').value) || 0;
  const months = parseInt(document.getElementById('months').value) || 0;
  const years = parseInt(document.getElementById('years').value) || 0;
  
  if (!startDate || (days === 0 && weeks === 0 && months === 0 && years === 0)) {
    alert('Please select a date and enter time periods first');
    return;
  }
  
  const start = new Date(startDate);
  const result = new Date(start);
  
  const totalDays = days + (weeks * 7);
  const multiplier = operation === 'add' ? 1 : -1;
  
  if (years > 0) result.setFullYear(result.getFullYear() + (years * multiplier));
  if (months > 0) result.setMonth(result.getMonth() + (months * multiplier));
  if (totalDays > 0) result.setDate(result.getDate() + (totalDays * multiplier));
  
  const resultString = result.toLocaleDateString();
  const operationText = operation === 'add' ? 'after' : 'before';
  
  const shareText = `${resultString} is ${years}y ${months}m ${weeks}w ${days}d ${operationText} ${startDate}. Calculate your own: ${window.location.href}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Add/Subtract Date Calculator',
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
  document.getElementById('startDate').value = today;
  calculateDate();
});
</script>

### Features:
- **Multiple time units** - Days, weeks, months, years
- **Add or subtract** - Calculate future or past dates
- **Custom calculations** - Any combination of time periods
- **Instant results** - Get answers immediately

### How to use:
1. Enter your starting date
2. Choose add or subtract
3. Select time units and amounts
4. See your calculated date

### Time unit options:
- **Days** - Add or subtract specific days
- **Weeks** - Calculate by 7-day periods
- **Months** - Add or subtract calendar months
- **Years** - Calculate by full years

### Common use cases:
- **Project deadlines** - Calculate due dates
- **Event planning** - Find dates for preparations
- **Age calculations** - Determine ages at specific dates
- **Anniversary tracking** - Find future anniversary dates

### Business applications:
- **Contract periods** - Calculate contract end dates
- **Payment schedules** - Determine payment due dates
- **Project timelines** - Plan project milestones
- **Deadline tracking** - Monitor work deadlines

### Personal applications:
- **Birthday planning** - Calculate future birthdays
- **Vacation planning** - Find optimal travel dates
- **Anniversary tracking** - Celebrate special dates
- **Goal deadlines** - Set target completion dates

### Tips for accuracy:
- **Leap years** - Account for February 29th
- **Month variations** - Different months have different days
- **Weekend considerations** - Plan around work schedules
- **Holiday awareness** - Consider holidays in planning

---

*Plan your projects and track important dates with Goal Getter's comprehensive goal and deadline tracking features.*

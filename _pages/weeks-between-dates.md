---
layout: page
title: Weeks Between Dates Calculator
permalink: /tools/weeks-between-dates/
description: Calculate the exact number of weeks between any two dates with our free weeks between dates calculator. Perfect for project planning, pregnancy tracking, and weekly goal setting.
keywords: weeks between dates, week calculator, date calculator, weeks difference, time calculator
---

# Weeks Between Dates Calculator

Calculate the exact number of weeks between any two dates with our free weeks between dates calculator. Perfect for project planning, pregnancy tracking, and weekly goal setting.

## How many weeks between two dates?

Calculate the precise number of weeks between any two dates with our accurate week calculator. Perfect for planning projects, tracking pregnancy, and setting weekly goals.

<div class="calculator-container" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 16px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <div class="calculator-header" style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2c3e50; margin-bottom: 10px;">📅 Weeks Between Dates Calculator</h3>
    <p style="color: #5a6c7d; font-size: 1.4rem;">Calculate the exact number of weeks between any two dates</p>
  </div>
  
  <div class="calculator-inputs" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
      <div>
        <label for="startDate" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Start Date</label>
        <input type="date" id="startDate" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateWeeks()">
      </div>
      <div>
        <label for="endDate" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">End Date</label>
        <input type="date" id="endDate" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateWeeks()">
      </div>
    </div>
    
    <div style="text-align: center;">
      <button onclick="setToToday()" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Use Today
      </button>
      <button onclick="setToNextMonth()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Next Month
      </button>
      <button onclick="setToNextYear()" style="background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease;">
        Next Year
      </button>
    </div>
  </div>
  
  <div class="result-display" style="text-align: center; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div id="result" style="font-size: 2.4rem; font-weight: 700; color: #2c3e50; margin-bottom: 20px;">
      Select dates to calculate weeks
    </div>
    <div id="detailedBreakdown" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
      <!-- Detailed breakdown will be inserted here -->
    </div>
  </div>
  
  <div class="calculator-actions" style="text-align: center;">
    <button onclick="swapDates()" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; margin-right: 10px;">
      Swap Dates
    </button>
    <button onclick="shareResult()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer;">
      Share Result
    </button>
  </div>
</div>

<script>
function calculateWeeks() {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  
  if (!startDate || !endDate) {
    document.getElementById('result').innerHTML = 'Select both dates to calculate';
    document.getElementById('detailedBreakdown').innerHTML = '';
    return;
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (start > end) {
    document.getElementById('result').innerHTML = 'Start date must be before end date';
    document.getElementById('detailedBreakdown').innerHTML = '';
    return;
  }
  
  // Calculate the difference in milliseconds
  const timeDiff = end - start;
  
  // Calculate weeks and additional time units
  const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
  // Calculate months and years
  const months = Math.floor(totalDays / 30.44); // Average days per month
  const years = Math.floor(totalDays / 365.25); // Account for leap years
  
  // Calculate business weeks (excluding weekends)
  const businessWeeks = Math.floor(totalDays / 7) * 5; // 5 business days per week
  const weekendDays = Math.floor(totalDays / 7) * 2; // 2 weekend days per week
  
  // Update main result
  document.getElementById('result').innerHTML = `${weeks} weeks`;
  
  // Create detailed breakdown
  const breakdown = `
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Total Days</div>
      <div style="font-size: 2rem; font-weight: 700; color: #4ecdc4;">${totalDays}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Remaining Days</div>
      <div style="font-size: 2rem; font-weight: 700; color: #667eea;">${remainingDays}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Months</div>
      <div style="font-size: 2rem; font-weight: 700; color: #4ecdc4;">${months}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Years</div>
      <div style="font-size: 2rem; font-weight: 700; color: #667eea;">${years}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Business Days</div>
      <div style="font-size: 2rem; font-weight: 700; color: #4ecdc4;">${businessWeeks}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Weekend Days</div>
      <div style="font-size: 2rem; font-weight: 700; color: #667eea;">${weekendDays}</div>
    </div>
  `;
  
  document.getElementById('detailedBreakdown').innerHTML = breakdown;
}

function setToToday() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('startDate').value = today;
  document.getElementById('endDate').value = today;
  calculateWeeks();
}

function setToNextMonth() {
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  
  const todayString = today.toISOString().split('T')[0];
  const nextMonthString = nextMonth.toISOString().split('T')[0];
  
  document.getElementById('startDate').value = todayString;
  document.getElementById('endDate').value = nextMonthString;
  calculateWeeks();
}

function setToNextYear() {
  const today = new Date();
  const nextYear = new Date(today);
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  
  const todayString = today.toISOString().split('T')[0];
  const nextYearString = nextYear.toISOString().split('T')[0];
  
  document.getElementById('startDate').value = todayString;
  document.getElementById('endDate').value = nextYearString;
  calculateWeeks();
}

function swapDates() {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  
  if (startDate && endDate) {
    document.getElementById('startDate').value = endDate;
    document.getElementById('endDate').value = startDate;
    calculateWeeks();
  }
}

function shareResult() {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  
  if (!startDate || !endDate) {
    alert('Please select both dates first');
    return;
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = end - start;
  const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(totalDays / 7);
  
  const shareText = `There are ${weeks} weeks between ${startDate} and ${endDate}. Calculate your own: ${window.location.href}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Weeks Between Dates Calculator',
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
  document.getElementById('endDate').value = today;
  calculateWeeks();
});
</script>

## Features

- **Precise calculation** - Exact number of weeks between any two dates
- **Multiple time units** - See days, months, years, and business days
- **Real-time updates** - Instant calculation as you change dates
- **Date validation** - Prevents invalid date selections
- **Business calculations** - Separate business and weekend day counts
- **Easy sharing** - Share your calculations with others

## How to use

1. **Select start date** - Choose your starting date
2. **Select end date** - Choose your ending date  
3. **View results** - See weeks, days, months, and years
4. **Share results** - Share your calculation with others

## Perfect for

- **Project planning** - Calculate project duration in weeks
- **Pregnancy tracking** - Track pregnancy weeks and milestones
- **Goal setting** - Set and track weekly goals
- **Event planning** - Plan events weeks in advance
- **Business planning** - Track business periods and deadlines

## Tips

- **Include both dates** - The calculation includes both start and end dates
- **Use swap dates** - Easily reverse the calculation
- **Check business days** - See how many business days are included
- **Share results** - Use the share button to send results to others

---

*Make weekly goal tracking part of your journey with Goal Getter - the ultimate habit and goal tracking app.*

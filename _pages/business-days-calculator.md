---
layout: page
title: Business Days Calculator
permalink: /tools/business-days-calculator/
description: Calculate business days between two dates, excluding weekends and holidays. Perfect for project planning and deadline calculations.
keywords: business days calculator, working days calculator, business days between dates, work days, project planning, deadline calculator
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Business Days Calculator",
  "description": "Calculate business days between two dates, excluding weekends and holidays",
  "url": "https://goalgetter.app/tools/business-days-calculator/",
  "applicationCategory": "UtilityApplication",
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

# Business Days Calculator

Calculate business days between two dates, excluding weekends and holidays.

<div class="calculator-container" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 16px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <div class="calculator-header" style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2c3e50; margin-bottom: 10px;">📅 Business Days Calculator</h3>
    <p style="color: #5a6c7d; font-size: 1.4rem;">Calculate working days excluding weekends</p>
  </div>
  
  <div class="calculator-inputs" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
    <div class="input-group">
      <label for="startDate" style="display: block; margin-bottom: 8px; font-weight: 600; color: #2c3e50;">Start Date:</label>
      <input type="date" id="startDate" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.4rem;" onchange="calculateBusinessDays()">
    </div>
    <div class="input-group">
      <label for="endDate" style="display: block; margin-bottom: 8px; font-weight: 600; color: #2c3e50;">End Date:</label>
      <input type="date" id="endDate" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.4rem;" onchange="calculateBusinessDays()">
    </div>
  </div>
  
  <div class="calculator-results" style="text-align: center; padding: 20px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <div id="businessDaysResult" style="font-size: 3.6rem; font-weight: 700; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 15px;">
      0
    </div>
    <div id="businessDaysLabel" style="color: #5a6c7d; font-size: 1.4rem; margin-bottom: 20px;">
      Business Days
    </div>
    <div id="detailedBreakdown" style="color: #5a6c7d; font-size: 1.4rem; line-height: 1.6;">
      Select start and end dates to see detailed breakdown
    </div>
  </div>
  
  <div class="calculator-actions" style="text-align: center; margin-top: 20px;">
    <button onclick="setToThisWeek()" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; margin-right: 10px;">
      This Week
    </button>
    <button onclick="setToThisMonth()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer;">
      This Month
    </button>
  </div>
</div>

## How to Use

1. **Select start date** - Choose when your period begins
2. **Select end date** - Choose when your period ends
3. **Get results** - See business days and detailed breakdown

## Features

- **Exclude weekends** - Automatically skip Saturday and Sunday
- **Flexible date range** - Calculate for any time period
- **Detailed breakdown** - See total days and weekends
- **Quick presets** - Common time periods with one click

## Perfect For

- **Project planning** - Calculate working days for project timelines
- **Deadline tracking** - Know exactly how many work days remain
- **Scheduling** - Plan meetings and appointments effectively
- **HR calculations** - Calculate employee working days

## Related Tools

- [Days Between Dates](/tools/days-between-dates/)
- [Hours Between Dates](/tools/hours-between-dates/)
- [Date Countdown Calculator](/tools/date-countdown-calculator/)
- [Percentage Year Calculator](/tools/percentage-year-calculator/)

<script>
function calculateBusinessDays() {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  
  if (!startDate || !endDate) {
    document.getElementById('businessDaysResult').textContent = '0';
    document.getElementById('businessDaysLabel').textContent = 'Business Days';
    document.getElementById('detailedBreakdown').textContent = 'Select start and end dates to see detailed breakdown';
    return;
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (start > end) {
    document.getElementById('businessDaysResult').textContent = '0';
    document.getElementById('businessDaysLabel').textContent = 'Business Days';
    document.getElementById('detailedBreakdown').textContent = 'Start date must be before end date';
    return;
  }
  
  let businessDays = 0;
  let totalDays = 0;
  let weekendDays = 0;
  
  const current = new Date(start);
  
  while (current <= end) {
    totalDays++;
    
    const isWeekend = current.getDay() === 0 || current.getDay() === 6;
    
    if (isWeekend) {
      weekendDays++;
    } else {
      businessDays++;
    }
    
    current.setDate(current.getDate() + 1);
  }
  
  // Update results
  document.getElementById('businessDaysResult').textContent = businessDays;
  document.getElementById('businessDaysLabel').textContent = 'Business Days (Excluding Weekends)';
  
  // Detailed breakdown
  const breakdown = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 15px;">
      <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
        <div style="font-weight: 600; color: #2c3e50;">Total Days</div>
        <div style="font-size: 2rem; font-weight: 700; color: #667eea;">${totalDays}</div>
      </div>
      <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
        <div style="font-weight: 600; color: #2c3e50;">Weekend Days</div>
        <div style="font-size: 2rem; font-weight: 700; color: #4ecdc4;">${weekendDays}</div>
      </div>
    </div>
  `;
  
  document.getElementById('detailedBreakdown').innerHTML = breakdown;
}

function setToThisWeek() {
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - today.getDay() + 1);
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);
  
  document.getElementById('startDate').value = monday.toISOString().split('T')[0];
  document.getElementById('endDate').value = friday.toISOString().split('T')[0];
  calculateBusinessDays();
}

function setToThisMonth() {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
  document.getElementById('startDate').value = firstDay.toISOString().split('T')[0];
  document.getElementById('endDate').value = lastDay.toISOString().split('T')[0];
  calculateBusinessDays();
}

// Initialize with this week
window.onload = function() {
  setToThisWeek();
};
</script>

---

*This business days calculator helps you plan projects and track deadlines accurately by excluding weekends from your calculations.*
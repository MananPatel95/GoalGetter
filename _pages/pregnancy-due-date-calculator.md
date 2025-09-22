---
layout: page
title: Pregnancy Due Date Calculator
permalink: /pregnancy-due-date-calculator/
description: Calculate your estimated due date and track your pregnancy progress with our free pregnancy calculator.
keywords: pregnancy calculator, due date calculator, pregnancy tracker, baby due date, pregnancy progress, expecting parents
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Pregnancy Due Date Calculator",
  "description": "Calculate your estimated due date and track pregnancy progress",
  "url": "https://goalgetter.app/tools/pregnancy-due-date-calculator/",
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

# Pregnancy Due Date Calculator

Calculate your estimated due date and track your pregnancy progress with our free pregnancy calculator.

## When is my baby due?

Track your pregnancy journey with our comprehensive due date calculator. Perfect for expecting parents planning for their new arrival.

<div class="calculator-container" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 16px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <div class="calculator-header" style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2c3e50; margin-bottom: 10px;">🤱 Pregnancy Due Date Calculator</h3>
    <p style="color: #5a6c7d; font-size: 1.4rem;">Calculate your estimated due date and track your pregnancy progress</p>
  </div>
  
  <div class="calculator-inputs" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
      <div>
        <label for="calculationMethod" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Calculation Method</label>
        <select id="calculationMethod" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="updateInputs()">
          <option value="lmp">Last Menstrual Period (LMP)</option>
          <option value="conception">Conception Date</option>
          <option value="ultrasound">Ultrasound Dating</option>
          <option value="ivf">IVF Transfer Date</option>
        </select>
      </div>
      <div>
        <label for="inputDate" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;" id="inputDateLabel">Last Menstrual Period Date</label>
        <input type="date" id="inputDate" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="calculateDueDate()">
      </div>
    </div>
    
    <div style="text-align: center;">
      <button onclick="setToToday()" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Use Today
      </button>
      <button onclick="setToLastWeek()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease;">
        Last Week
      </button>
    </div>
  </div>
  
  <div class="result-display" style="text-align: center; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div id="dueDateResult" style="font-size: 2.4rem; font-weight: 700; color: #2c3e50; margin-bottom: 20px;">
      Enter your information to calculate due date
    </div>
    <div id="pregnancyDetails" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
      <!-- Pregnancy details will be inserted here -->
    </div>
  </div>
  
  <div class="milestones-display" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <h4 style="color: #2c3e50; margin-bottom: 20px; text-align: center;">Pregnancy Milestones</h4>
    <div id="milestonesList" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
      <!-- Milestones will be inserted here -->
    </div>
  </div>
  
  <div class="calculator-actions" style="text-align: center;">
    <button onclick="shareResult()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer;">
      Share Result
    </button>
  </div>
</div>

<script>
function updateInputs() {
  const method = document.getElementById('calculationMethod').value;
  const label = document.getElementById('inputDateLabel');
  
  switch(method) {
    case 'lmp':
      label.textContent = 'Last Menstrual Period Date';
      break;
    case 'conception':
      label.textContent = 'Conception Date';
      break;
    case 'ultrasound':
      label.textContent = 'Ultrasound Date';
      break;
    case 'ivf':
      label.textContent = 'IVF Transfer Date';
      break;
  }
  
  calculateDueDate();
}

function calculateDueDate() {
  const method = document.getElementById('calculationMethod').value;
  const inputDate = document.getElementById('inputDate').value;
  
  if (!inputDate) {
    document.getElementById('dueDateResult').innerHTML = 'Enter your information to calculate due date';
    document.getElementById('pregnancyDetails').innerHTML = '';
    document.getElementById('milestonesList').innerHTML = '';
    return;
  }
  
  const date = new Date(inputDate);
  let dueDate;
  let weeksPregnant = 0;
  
  switch(method) {
    case 'lmp':
      // Add 280 days (40 weeks) to LMP
      dueDate = new Date(date.getTime() + (280 * 24 * 60 * 60 * 1000));
      weeksPregnant = Math.floor((new Date() - date) / (7 * 24 * 60 * 60 * 1000));
      break;
    case 'conception':
      // Add 266 days (38 weeks) to conception date
      dueDate = new Date(date.getTime() + (266 * 24 * 60 * 60 * 1000));
      weeksPregnant = Math.floor((new Date() - date) / (7 * 24 * 60 * 60 * 1000)) + 2;
      break;
    case 'ultrasound':
      // Add 266 days (38 weeks) to ultrasound date
      dueDate = new Date(date.getTime() + (266 * 24 * 60 * 60 * 1000));
      weeksPregnant = Math.floor((new Date() - date) / (7 * 24 * 60 * 60 * 1000)) + 2;
      break;
    case 'ivf':
      // Add 266 days (38 weeks) to transfer date
      dueDate = new Date(date.getTime() + (266 * 24 * 60 * 60 * 1000));
      weeksPregnant = Math.floor((new Date() - date) / (7 * 24 * 60 * 60 * 1000)) + 2;
      break;
  }
  
  // Ensure weeks pregnant is not negative
  weeksPregnant = Math.max(0, weeksPregnant);
  
  // Calculate days until due date
  const daysUntilDue = Math.ceil((dueDate - new Date()) / (24 * 60 * 60 * 1000));
  
  // Update main result
  const dueDateString = dueDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  document.getElementById('dueDateResult').innerHTML = `Due Date: ${dueDateString}`;
  
  // Create pregnancy details
  const details = `
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Weeks Pregnant</div>
      <div style="font-size: 2rem; font-weight: 700; color: #4ecdc4;">${weeksPregnant}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Days Until Due</div>
      <div style="font-size: 2rem; font-weight: 700; color: #667eea;">${daysUntilDue}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Trimester</div>
      <div style="font-size: 2rem; font-weight: 700; color: #4ecdc4;">${getTrimester(weeksPregnant)}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
      <div style="font-weight: 600; color: #2c3e50;">Progress</div>
      <div style="font-size: 2rem; font-weight: 700; color: #667eea;">${Math.min(100, Math.round((weeksPregnant / 40) * 100))}%</div>
    </div>
  `;
  
  document.getElementById('pregnancyDetails').innerHTML = details;
  
  // Create milestones
  createMilestones(weeksPregnant, dueDate);
}

function getTrimester(weeks) {
  if (weeks < 13) return '1st';
  if (weeks < 27) return '2nd';
  if (weeks < 40) return '3rd';
  return 'Full Term';
}

function createMilestones(weeksPregnant, dueDate) {
  const milestones = [
    { week: 4, title: 'Positive Pregnancy Test', description: 'First pregnancy test positive' },
    { week: 8, title: 'First Ultrasound', description: 'Dating scan and heartbeat' },
    { week: 12, title: 'End of First Trimester', description: 'Risk of miscarriage decreases' },
    { week: 16, title: 'Gender Reveal', description: 'Possible to determine baby\'s sex' },
    { week: 20, title: 'Anatomy Scan', description: 'Detailed ultrasound examination' },
    { week: 24, title: 'Viability Milestone', description: 'Baby can survive outside womb' },
    { week: 28, title: 'Third Trimester', description: 'Final trimester begins' },
    { week: 32, title: 'Baby Positioning', description: 'Baby may turn head down' },
    { week: 37, title: 'Full Term', description: 'Baby is considered full term' },
    { week: 40, title: 'Due Date', description: 'Expected delivery date' }
  ];
  
  let milestonesHTML = '';
  
  milestones.forEach(milestone => {
    const isPassed = weeksPregnant >= milestone.week;
    const isCurrent = weeksPregnant === milestone.week;
    const isUpcoming = weeksPregnant < milestone.week && weeksPregnant >= milestone.week - 2;
    
    let statusClass = '';
    let statusIcon = '';
    
    if (isPassed) {
      statusClass = 'background: #d4edda; border-left: 4px solid #28a745;';
      statusIcon = '✅';
    } else if (isCurrent) {
      statusClass = 'background: #fff3cd; border-left: 4px solid #ffc107;';
      statusIcon = '🎯';
    } else if (isUpcoming) {
      statusClass = 'background: #e2e3e5; border-left: 4px solid #6c757d;';
      statusIcon = '⏳';
    } else {
      statusClass = 'background: #f8f9fa; border-left: 4px solid #e9ecef;';
      statusIcon = '📅';
    }
    
    milestonesHTML += `
      <div style="${statusClass} padding: 15px; border-radius: 8px; margin-bottom: 10px;">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 1.2rem; margin-right: 8px;">${statusIcon}</span>
          <strong style="color: #2c3e50;">Week ${milestone.week}</strong>
        </div>
        <div style="font-weight: 600; color: #2c3e50; margin-bottom: 4px;">${milestone.title}</div>
        <div style="color: #6c757d; font-size: 0.9rem;">${milestone.description}</div>
      </div>
    `;
  });
  
  document.getElementById('milestonesList').innerHTML = milestonesHTML;
}

function setToToday() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('inputDate').value = today;
  calculateDueDate();
}

function setToLastWeek() {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const lastWeekString = lastWeek.toISOString().split('T')[0];
  document.getElementById('inputDate').value = lastWeekString;
  calculateDueDate();
}

function shareResult() {
  const inputDate = document.getElementById('inputDate').value;
  const method = document.getElementById('calculationMethod').value;
  
  if (!inputDate) {
    alert('Please enter your information first');
    return;
  }
  
  const date = new Date(inputDate);
  let dueDate;
  
  switch(method) {
    case 'lmp':
      dueDate = new Date(date.getTime() + (280 * 24 * 60 * 60 * 1000));
      break;
    default:
      dueDate = new Date(date.getTime() + (266 * 24 * 60 * 60 * 1000));
      break;
  }
  
  const dueDateString = dueDate.toLocaleDateString();
  const weeksPregnant = Math.max(0, Math.floor((new Date() - date) / (7 * 24 * 60 * 60 * 1000)) + (method === 'lmp' ? 0 : 2));
  
  const shareText = `I'm ${weeksPregnant} weeks pregnant and my due date is ${dueDateString}! Track your pregnancy: ${window.location.href}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Pregnancy Due Date Calculator',
      text: shareText,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Result copied to clipboard!');
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  updateInputs();
});
</script>

### Features:
- **Accurate calculation** - Based on last menstrual period
- **Pregnancy progress** - See how far along you are
- **Multiple methods** - LMP, conception date, or ultrasound
- **Milestone tracking** - Important pregnancy milestones

### How to use:
1. Enter your last menstrual period date
2. See your estimated due date
3. Track your pregnancy progress
4. Get milestone reminders

### Calculation methods:
- **Last Menstrual Period (LMP)** - Most common method
- **Conception date** - If you know the exact date
- **Ultrasound dating** - Most accurate method
- **IVF transfer date** - For assisted reproduction

### Pregnancy milestones:
- **4 weeks** - Positive pregnancy test
- **8 weeks** - First ultrasound
- **12 weeks** - End of first trimester
- **20 weeks** - Anatomy scan
- **28 weeks** - Third trimester begins
- **37 weeks** - Full term
- **40 weeks** - Due date

### Tips for expecting parents:
- **Track symptoms** - Use Goal Getter to monitor pregnancy symptoms
- **Set goals** - Track healthy habits during pregnancy
- **Count down** - Use countdown features for important dates
- **Stay organized** - Plan for baby's arrival

### Important reminders:
- **Prenatal care** - Regular doctor visits
- **Healthy habits** - Exercise and nutrition goals
- **Preparation** - Baby registry and nursery setup
- **Education** - Childbirth and parenting classes

---

*Track your pregnancy journey and prepare for your new arrival with Goal Getter's comprehensive goal tracking features.*

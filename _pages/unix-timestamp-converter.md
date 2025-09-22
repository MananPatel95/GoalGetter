---
layout: page
title: Unix Timestamp Converter
permalink: /unix-timestamp-converter/
description: Convert Unix timestamps to human-readable dates and vice versa with our free Unix timestamp converter.
keywords: unix timestamp converter, timestamp converter, unix time, epoch time, date converter, time converter
---

# Unix Timestamp Converter

Convert Unix timestamps to human-readable dates and vice versa with our free Unix timestamp converter.

## Convert Unix timestamps to dates

Convert between Unix timestamps (epoch time) and human-readable dates with our comprehensive timestamp converter. Perfect for developers, data analysts, and anyone working with timestamps.

<div class="calculator-container" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 16px; margin: 30px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <div class="calculator-header" style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2c3e50; margin-bottom: 10px;">⏰ Unix Timestamp Converter</h3>
    <p style="color: #5a6c7d; font-size: 1.4rem;">Convert between Unix timestamps and human-readable dates</p>
  </div>
  
  <div class="calculator-inputs" style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
      <div>
        <label for="conversionType" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Conversion Type</label>
        <select id="conversionType" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="updateInputs()">
          <option value="timestamp-to-date">Timestamp to Date</option>
          <option value="date-to-timestamp">Date to Timestamp</option>
        </select>
      </div>
      <div>
        <label for="inputValue" style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 8px;" id="inputLabel">Unix Timestamp</label>
        <input type="text" id="inputValue" placeholder="Enter Unix timestamp" style="width: 100%; padding: 12px; border: 2px solid #e9ecef; border-radius: 8px; font-size: 1.1rem; transition: border-color 0.3s ease;" onchange="convertTimestamp()">
      </div>
    </div>
    
    <div style="text-align: center;">
      <button onclick="setToCurrent()" style="background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Current Time
      </button>
      <button onclick="setToEpoch()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease; margin-right: 10px;">
        Unix Epoch
      </button>
      <button onclick="clearInputs()" style="background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 1.4rem; font-weight: 600; cursor: pointer; transition: transform 0.3s ease;">
        Clear
      </button>
    </div>
  </div>
  
  <div class="result-display" style="text-align: center; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
    <div id="conversionResult" style="font-size: 2.4rem; font-weight: 700; color: #2c3e50; margin-bottom: 20px;">
      Enter a value to convert
    </div>
    <div id="conversionDetails" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
      <!-- Conversion details will be inserted here -->
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
  const type = document.getElementById('conversionType').value;
  const label = document.getElementById('inputLabel');
  const input = document.getElementById('inputValue');
  
  if (type === 'timestamp-to-date') {
    label.textContent = 'Unix Timestamp';
    input.placeholder = 'Enter Unix timestamp (e.g., 1640995200)';
    input.type = 'text';
  } else {
    label.textContent = 'Date & Time';
    input.placeholder = 'Select date and time';
    input.type = 'datetime-local';
  }
  
  convertTimestamp();
}

function convertTimestamp() {
  const type = document.getElementById('conversionType').value;
  const inputValue = document.getElementById('inputValue').value;
  
  if (!inputValue) {
    document.getElementById('conversionResult').innerHTML = 'Enter a value to convert';
    document.getElementById('conversionDetails').innerHTML = '';
    return;
  }
  
  let timestamp, date;
  
  try {
    if (type === 'timestamp-to-date') {
      timestamp = parseInt(inputValue);
      if (isNaN(timestamp)) {
        throw new Error('Invalid timestamp');
      }
      
      if (timestamp > 1000000000000) {
        date = new Date(timestamp);
      } else {
        date = new Date(timestamp * 1000);
      }
      
      if (isNaN(date.getTime())) {
        throw new Error('Invalid timestamp');
      }
      
    } else {
      date = new Date(inputValue);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      
      timestamp = Math.floor(date.getTime() / 1000);
    }
    
    displayResult(timestamp, date, type);
    
  } catch (error) {
    document.getElementById('conversionResult').innerHTML = 'Invalid input. Please check your format.';
    document.getElementById('conversionDetails').innerHTML = '';
  }
}

function displayResult(timestamp, date, type) {
  let resultText;
  if (type === 'timestamp-to-date') {
    resultText = date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  } else {
    resultText = `Unix Timestamp: ${timestamp}`;
  }
  
  document.getElementById('conversionResult').innerHTML = resultText;
  
  const details = `
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
      <div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Unix Timestamp</div>
      <div style="font-size: 1.8rem; font-weight: 700; color: #4ecdc4;">${timestamp}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
      <div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px;">ISO 8601</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #667eea;">${date.toISOString()}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
      <div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px;">UTC Time</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #4ecdc4;">${date.toUTCString()}</div>
    </div>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center;">
      <div style="font-weight: 600; color: #2c3e50; margin-bottom: 8px;">Local Time</div>
      <div style="font-size: 1.2rem; font-weight: 700; color: #667eea;">${date.toLocaleString()}</div>
    </div>
  `;
  
  document.getElementById('conversionDetails').innerHTML = details;
}

function setToCurrent() {
  const now = new Date();
  const type = document.getElementById('conversionType').value;
  
  if (type === 'timestamp-to-date') {
    const timestamp = Math.floor(now.getTime() / 1000);
    document.getElementById('inputValue').value = timestamp.toString();
  } else {
    const localDateTime = now.toISOString().slice(0, 16);
    document.getElementById('inputValue').value = localDateTime;
  }
  
  convertTimestamp();
}

function setToEpoch() {
  const type = document.getElementById('conversionType').value;
  
  if (type === 'timestamp-to-date') {
    document.getElementById('inputValue').value = '0';
  } else {
    const epochDate = new Date(0);
    const localDateTime = epochDate.toISOString().slice(0, 16);
    document.getElementById('inputValue').value = localDateTime;
  }
  
  convertTimestamp();
}

function clearInputs() {
  document.getElementById('inputValue').value = '';
  document.getElementById('conversionResult').innerHTML = 'Enter a value to convert';
  document.getElementById('conversionDetails').innerHTML = '';
}

function shareResult() {
  const type = document.getElementById('conversionType').value;
  const inputValue = document.getElementById('inputValue').value;
  
  if (!inputValue) {
    alert('Please enter a value to convert first');
    return;
  }
  
  let timestamp, date;
  
  try {
    if (type === 'timestamp-to-date') {
      timestamp = parseInt(inputValue);
      if (timestamp > 1000000000000) {
        date = new Date(timestamp);
      } else {
        date = new Date(timestamp * 1000);
      }
    } else {
      date = new Date(inputValue);
      timestamp = Math.floor(date.getTime() / 1000);
    }
    
    const dateString = date.toLocaleString();
    const shareText = `Unix timestamp ${timestamp} = ${dateString}. Convert timestamps: ${window.location.href}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Unix Timestamp Converter',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Result copied to clipboard!');
      });
    }
  } catch (error) {
    alert('Please enter a valid value first');
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  updateInputs();
});
</script>

## Features

- **Bidirectional conversion** - Convert timestamps to dates and dates to timestamps
- **Multiple formats** - Unix timestamp, ISO 8601, UTC, and local time
- **Real-time calculation** - Instant conversion as you type
- **Input validation** - Handles both seconds and milliseconds
- **Easy sharing** - Share your conversions with others

## How to use

1. **Choose conversion type** - Timestamp to date or date to timestamp
2. **Enter your value** - Unix timestamp or date/time
3. **View results** - See multiple format conversions
4. **Share results** - Share your conversion with others

## Perfect for

- **Developers** - Convert timestamps in code and databases
- **Data analysts** - Work with timestamp data
- **System administrators** - Debug timestamp issues
- **Students** - Learn about Unix time and date formats
- **Anyone** - Convert between different time formats

---

*Convert timestamps and work with dates efficiently using Goal Getter's comprehensive time management tools.*
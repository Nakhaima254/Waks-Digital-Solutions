# Free Website Knowledge-Based Chatbot Setup

## Overview
Your chatbot now runs entirely on website content and local logic. It no longer requires any paid AI service, subscription, or API key.

## What Changed
- `api/server.js`: replaced the paid chatbot integration with a free knowledge-driven bot
- `api/website-knowledge.js`: stores the full website content, service details, pricing, portfolio, FAQ, and contact info
- `api/package.json`: removed the paid AI package dependency
- `.env` / `.env.example`: no paid API key is required

## Setup
1. Open the `api` folder:
   ```bash
   cd api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the API server:
   ```bash
   npm start
   # or for development
   npm run dev
   ```

## How It Works
- The chatbot reads the website content from `api/website-knowledge.js`
- It uses local intent matching plus content-aware answer generation
- It answers pricing, services, portfolio, contact, process, and FAQ queries without any paid model
- It keeps recent chat history in session memory for better continuity

## Customize the Bot
- Edit `api/website-knowledge.js` to update services, pricing, portfolio projects, FAQs, or company details
- The bot will use the updated information automatically after restart

## Example Topics the Bot Now Handles
- Service descriptions
- Pricing ranges and packages
- Portfolio examples
- M-Pesa and e-commerce support
- WordPress website development
- Website maintenance and support
- Development process and timelines
- Contact and response details

## Important Note
No paid or premium AI key is needed. The bot is now free and fully based on your website knowledge.

---

**Bot files updated:**
- `api/server.js`
- `api/website-knowledge.js`
- `api/package.json`
- `api/.env`
- `api/.env.example`

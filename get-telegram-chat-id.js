#!/usr/bin/env node

// Quick script to get Telegram chat ID
// Usage: node get-telegram-chat-id.js

const BOT_TOKEN = '8317060165:AAE19Mpj0Te6BIoV8rdmb8G0l2WBxJmD1yA';

async function getChatId() {
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
    const data = await response.json();

    console.log('Raw Telegram response:');
    console.log(JSON.stringify(data, null, 2));

    if (data.ok && data.result.length > 0) {
      console.log('\n=== CHAT IDs FOUND ===');
      data.result.forEach((update, index) => {
        if (update.message?.chat) {
          console.log(`Update ${index + 1}:`);
          console.log(`  Chat ID: ${update.message.chat.id}`);
          console.log(`  Chat Type: ${update.message.chat.type}`);
          console.log(`  From: ${update.message.from?.first_name || 'Unknown'}`);
          console.log('');
        }
      });

      // Get the most recent chat ID
      const latestChatId = data.result[data.result.length - 1]?.message?.chat?.id;
      if (latestChatId) {
        console.log(`\n🎯 Use this Chat ID in your .env.local:`);
        console.log(`TELEGRAM_CHAT_ID=${latestChatId}`);
      }
    } else {
      console.log('\n⚠️  No messages found. Please:');
      console.log('1. Send a message to your bot first');
      console.log('2. Then run this script again');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getChatId();
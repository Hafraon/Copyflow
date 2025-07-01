// scripts/setup-assistant.ts
import { setupCopyFlowAssistant } from '../lib/copyflow-assistant'

async function main() {
  try {
    console.log('🚀 Створюємо CopyFlow Assistant...')
    
    const result = await setupCopyFlowAssistant()
    
    console.log(`
✅ Асистент створено успішно!

Додайте цей рядок в ваш .env.local:
COPYFLOW_ASSISTANT_ID=${result.assistantId}

Тепер ви можете використовувати експертну генерацію!
    `)
    
  } catch (error) {
    console.error('❌ Помилка створення асистента:', error)
    process.exit(1)
  }
}

main()
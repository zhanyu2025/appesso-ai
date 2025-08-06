#!/bin/sh

echo "🔄 等待数据库连接..."
sleep 10

echo "📊 检查数据库连接..."
npx prisma db push

echo "✅ 数据库初始化完成" 
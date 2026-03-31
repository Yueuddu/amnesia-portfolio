# 🚀 Инструкция по деплою на GitHub Pages

## Шаг 1: Создайте репозиторий на GitHub

1. Зайдите на https://github.com
2. Войдите под аккаунтом **VovlichenKOS**
3. Нажмите **"New"** (создать репозиторий)
4. Заполните:
   - **Repository name:** `amnesia-portfolio`
   - **Visibility:** ✅ Public
   - ❌ Не ставьте галочки на "Initialize with README"
5. Нажмите **"Create repository"**

---

## Шаг 2: Запушьте код

Откройте PowerShell или командную строку в папке проекта:

```powershell
cd "c:\Users\User\OneDrive\Рабочий стол\Новая папка\amnesia-portfolio"

# Инициализация git
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit - Amnesia Portfolio"

# Переименование ветки в main
git branch -M main

# Добавление удалённого репозитория
git remote add origin https://github.com/VovlichenKOS/amnesia-portfolio.git

# Пуш кода
git push -u origin main
```

---

## Шаг 3: Включите GitHub Pages

1. Откройте ваш репозиторий: https://github.com/VovlichenKOS/amnesia-portfolio
2. Перейдите во вкладку **Settings** (вверху)
3. В меню слева выберите **Pages**
4. В разделе **"Build and deployment"**:
   - **Source:** Выберите `GitHub Actions`
5. Деплой запустится автоматически!

---

## Шаг 4: Проверьте статус деплоя

1. Перейдите во вкладку **Actions** в вашем репозитории
2. Кликните на последний запуск workflow
3. Дождитесь зелёной галочки ✅

---

## Шаг 5: Откройте сайт

После успешного деплоя сайт будет доступен по адресу:

```
https://vovlichenkos.github.io/amnesia-portfolio/
```

### Страницы сайта:

| Страница | URL |
|----------|-----|
| 🏠 Главная | `https://vovlichenkos.github.io/amnesia-portfolio/` |
| 👤 Обо мне | `https://vovlichenkos.github.io/amnesia-portfolio/about/` |
| 📁 Проекты | `https://vovlichenkos.github.io/amnesia-portfolio/projects/` |
| 📞 Контакты | `https://vovlichenkos.github.io/amnesia-portfolio/contacts/` |

---

## 🔧 Обновление сайта

После любых изменений в коде:

```powershell
git add .
git commit -m "Описание изменений"
git push
```

GitHub Actions автоматически обновит сайт через 1-2 минуты.

---

## ⚠️ Решение проблем

### 404 ошибка после деплоя

1. Подождите 2-3 минуты после деплоя
2. Убедитесь, что URL заканчивается на `/`
3. Проверьте вкладку **Actions** — нет ли ошибок

### Ошибка при пуше

```bash
# Если просит настроить git
git config --global user.name "VovlichenKOS"
git config --global user.email "suhanovv909@gmail.com"
```

### Долгий деплой

Обычно деплой занимает 1-3 минуты. Если дольше — проверьте вкладку **Actions** на наличие ошибок.

---

## 📞 Контакты для помощи

- Telegram: @Pampakin
- Email: suhanovv909@gmail.com

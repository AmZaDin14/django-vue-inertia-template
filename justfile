@_default:
  just --list

# Django runserver
serve:
  python manage.py runserver

# Serve for development
dev:
  bunx concurrently --names 'vite,django' -c '#f0db4f,#4B8BBE' "bun run dev" "python manage.py runserver"

# Build for production
build:
  bun run build
  python manage.py collectstatic --no-input

@_default:
  just --list

# Serve for development
serve:
  bunx concurrently "bun run dev" "python manage.py runserver"

# Build for production
build:
  bun run build
  python manage.py collectstatic --no-input

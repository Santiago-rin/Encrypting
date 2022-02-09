/*
ASGI config for web project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
 */

var os = require('os');

from django.core.asgi var get_asgi_application = require('get_asgi_application');

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web.settings');

application = get_asgi_application();

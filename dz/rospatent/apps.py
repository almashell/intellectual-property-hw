import sys

from django.apps import AppConfig

from rospatent.views import load_df

# https://stackoverflow.com/questions/6791911/execute-code-when-django-starts-once-only
# https://stackoverflow.com/questions/65023358/where-in-django-can-i-run-startup-to-load-data
class RospatentConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'rospatent'

    def ready(self):
        # if 'runserver' not in sys.argv:
        #     return True
        # you must import your modules here
        # startup code here
        load_df()
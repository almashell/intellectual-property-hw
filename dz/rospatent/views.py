from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework.views import APIView

import pandas as pd

df = None

def load_df():
    global df
    df = pd.read_csv('./static/data-20220401-structure-20180828.csv')

def get_data():
  if df is None:
      raise Exception("Expensive df not loaded")
  return df

# https://stackoverflow.com/questions/60208/replacements-for-switch-statement-in-python
def get_links(patent_type, df):
    return {
        'word': df[(df['threedimensional'] == False) & (df['holographic'] == False) & (df['sound'] == False) & (df['olfactory'] == False) & (df['color'] == False) & (df['light'] == False) & (df['changing'] == False) & (df['positional'] == False)].sample(5, replace=True)['publication URL'].values.tolist(),
        'threedimensional': df[df['threedimensional'] == True].sample(5, replace=True)['publication URL'].values.tolist(),
        'holographic': df[df['holographic'] == True].sample(5, replace=True)['publication URL'].values.tolist(),
        'sound': df[df['sound'] == True].sample(5, replace=True)['publication URL'].values.tolist(),
        'olfactory': df[df['olfactory'] == True].sample(5, replace=True)['publication URL'].values.tolist(),
        'color': df[df['color'] == True].sample(5, replace=True)['publication URL'].values.tolist(),
        'light': df[df['light'] == True].sample(5, replace=True)['publication URL'].values.tolist(),
        'changing': df[df['changing'] == True].sample(5, replace=True)['publication URL'].values.tolist(),
        'positional': df[df['positional'] == True].sample(5, replace=True)['publication URL'].values.tolist(),
    }.get(patent_type, [])


@api_view(('GET',))
def rospatent_links(request, pk):
    print(pk)

    return Response({"links": get_links(pk, df)})

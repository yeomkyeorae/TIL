import requests

key = 'f5d6224b783502aee8abff61e5682845'
targetDt = '20190713'  # yyyymmdd
api_url = f'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key={key}&targetDt={targetDt}'
print(api_url)

response = requests.get(api_url).json()
print(response)

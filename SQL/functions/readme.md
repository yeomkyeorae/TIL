## Date Functions
### DATE_SUB
date와 interval value의 차이에 해당하는 date 값을 반환.
> syntax 

DATE(date, INTERVAL value interval)
> 예시: 현재 시간에서 20초 이내에 해당하는 시간 값을 갖는 데이터 조회
```sql
select * from tmp where \`time\` > date_sub(now(), interval 20 second);
```

### REPLACE
REPLACE(input_string, substring, new_substring)로 사용. input_string에서 substring에 해당하는 문자를 new_substring으로 대체
> 예시
```sql
SELECT 
    REPLACE(
        'It is a lion!', 
        'lion', 
        'tiger'
    ) result;
```
> result

It is a tiger! 

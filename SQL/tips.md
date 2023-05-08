DB 현재 시간 확인하기
```sql
SELECT CURRENT_TIMESTAMP;
```

현재 등록된 event 정보 확인하기
```sql
SELECT * FROM INFORMATION_SCHEMA.events;
```

등록한 event 자동으로 실행되도록 설정
```sql
SET GLOBAL event_scheduler = ON;
```

파티션 조회 예시
```sql
SELECT * FROM INFORMATION_SCHEMA.partitions WHERE PARTITION_NAME IS NOT NULL;
```

이벤트 생성 쿼리 예시
```sql
DROP EVENT IF EXISTS evt_selectSomething;
CREATE EVENT 
    evt_selectSomething
ON SCHEDULE
AT 
    '2025-12-25 00:00:00'
ON COMPLETION NOT PRESERVE
COMMENT 
    'Happy New Year'
DO 
    SELECT * FROM something;
```

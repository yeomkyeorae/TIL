# SQL

## 프로그래머스 연습 문제 중 SQL과 관련 문항들

### Level 1

#### 1. 모든 레코드 조회하기

동물 보호소에 들어온 모든 동물의 정보를 `ANIMAL_ID` 순으로 조회하는 SQL

```sql
SELECT * FROM ANIMAL_INS ORDER BY ANIMAL_ID ASC;
```



#### 2. 최댓값 구하기

가장 최근에 들어온 동물은 언제 들어왔는지 조회하는 SQL

```sql
SELECT MAX(DATETIME) FROM ANIMAL_INS;
```



#### 3. 역순 정렬하기

동물 보호소에 들어온 모든 동물의 이름과 보호 시작일을 조회하는 SQL, ANIMAL_ID 역순으로

```sql
SELECT NAME, DATETIME FROM ANIMAL_INS ORDER BY ANIMAL_ID DESC;
```



#### 4. 아픈 동물 찾기(WHERE)

동물 보호소에 들어온 동물 중 아픈 동물의 아이디와 이름을 조회하는 SQL, 아이디 순으로

```sql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = 'Sick' ORDER BY ANIMAL_ID;
```



#### 5. 어린 동물 찾기(WHERE)

동물 보호소에 들어온 동물 중 젊은 동물의 아이디와 이름을 조회하는 SQL, 아이디 순으로

```sql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION != 'Aged' ORDER BY ANIMAL_ID;
```



#### 6. 여러 기준으로 정렬하기

동물 보호소에 들어온 모든 동물의 아이디와 이름, 보호 시작일을 이름 순으로 조회하는 SQL, 이름이 같은 동물은 보호를 나중에 시작한 동물을 먼저 보여줌.

```sql
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS ORDER BY NAME ASC, DATETIME DESC;
```



#### 7. 이름이 없는 동물의 아이디(NULL)

동물 보호소에 들어오 동물 중 이름이 없는 채로 들어온 동물의 ID를 조회하는 SQL

```sql
SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME is NULL;
```

- 이름이 있는

  ```sql
  SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME is NOT NULL;
  ```

  

#### 8. 상위 n개 레코드

동물 보호소에 가장 먼저 들어온 동물의 이름을 조회하는 SQL

```sql
SELECT NAME FROM ANIMAL_INS ORDER BY DATETIME LIMIT 1;
```



### LEVEL 2

#### 1. 동물 수 구하기(COUNT)

동물 보호소에 동물이 몇 마리 들어왔는지 조회하는 SQL

```sql
SELECT COUNT(*) FROM ANIMAL_INS;
```



#### 2. 중복 제거하기(DISTINCT)

동물 보호소에 들어온 동물의 이름은 몇 개인지 조회하는 SQL, 이름이 NULL인 경우는 집계하지 않으며 중복되는 이름은 하나로 침.

```sql
SELECT COUNT(DISTINCT NAME) FROM ANIMAL_INS;
```



#### 3. 고양이와 개는 몇 마리? (GROUP BY)

동물 보호소에 들어온 동물 중 고양이와 개가 각각 몇 마리인지 조회하는 SQL 문, 이때 고양이가 개보다 먼저 조회.

```sql
SELECT ANIMAL_TYPE, COUNT(*) FROM ANIMAL_INS GROUP BY ANIMAL_TYPE;
```



#### 4. 동명 동물 수 찾기

동물 보호소에 들어온 동물 이름 중 두 번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하는 SQL, 이름이 없는 동물은 제외, 결과는 이름 순으로 조회.

```sql
SELECT NAME, COUNT(NAME) FROM ANIMAL_INS WHERE NAME IS NOT NULL GROUP BY NAME HAVING COUNT(NAME) >= 2;
```



#### 5. NULL 처리하기

동물의 생물 종, 이름, 성별 및 중서화 여부를 아이디 순으로 조회하는 SQL, 이름이 NULL일 경우 "No name"으로 대체 표시

```sql
SELECT ANIMAL_TYPE, CASE WHEN NAME IS NULL THEN 'No name' else NAME END NAME, SEX_UPON_INTAKE FROM ANIMAL_INS;
```



#### 6. 입양 시각 구하기(GROUP BY, HAVING, AS)

각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL, 시간대 순으로 정렬

```sql
SELECT HOUR (DATETIME) AS HOUR, COUNT(HOUR(DATETIME)) AS COUNT FROM ANIMAL_OUTS
GROUP BY HOUR
HAVING hour BETWEEN 9 AND 19
ORDER BY HOUR;
```



####7. 특정 이름 찾기(WHERE IN)

특정 이름을 갖는 동물의 아이디와 이름, 성별을 조회하는 SQL

```sql
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
ORDER BY ANIMAL_ID ASC;
```



#### 8. 특정 문자열 포함하는 이름 찾기(LIKE)

이름에 `el`이 들어가는 개의 ID와 이름을 찾는 SQL

```sql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE NAME LIKE '%EL%' AND ANIMAL_TYPE LIKE 'Dog' ORDER BY NAME;
```



#### 9. 중성화 여부 파악하기

동물의 아이디, 이름, 중성화 여부를 아이디 순으로 조회하는 SQL

```sql
SELECT ANIMAL_ID, NAME, (CASE WHEN (SEX_UPON_INTAKE LIKE '%INTACT%') THEN 'X' ELSE 'O' END) as '중성화' FROM ANIMAL_INS ORDER BY ANIMAL_ID ASC;
```



#### 10. DATETIME에서 DATE로 형 변환

```sql
SELECT ANIMAL_ID, NAME, DATE_FORMAT(DATETIME, '%Y-%m-%d') AS '날짜' FROM ANIMAL_INS 
ORDER BY ANIMAL_ID ASC;
```



### LEVEL 3

#### 1. 없어진 기록 찾기(OUTER JOIN)

입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 ID와 이름을 ID 순으로 조회하는 SQL

```sql
SELECT ANIMAL_OUTS.ANIMAL_ID, ANIMAL_OUTS.NAME 
FROM ANIMAL_OUTS
LEFT OUTER JOIN ANIMAL_INS ON ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID 
WHERE ANIMAL_INS.ANIMAL_ID IS NULL
ORDER BY ANIMAL_ID ASC;
```



## 생소한 쿼리

### 1. 그룹별로 순위 매긴 결과 조회
ROW_NUMBER()

```sql
SELECT num, name, job, salaly, ROW_NUMBER() OVER(PARTITION BY job ORDER BY salary) AS rank FROM table;
```
Job을 기준으로 그룹을 정하고, salary를 기준으로 순위를 매기고, 각각 행에 ROW_NUMBER를 부여한다.



## ERD

[ERD 표기법](https://bamdule.tistory.com/46)


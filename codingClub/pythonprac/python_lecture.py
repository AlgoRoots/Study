# -*- coding: utf-8 -*-

import sys

print(sys.getdefaultencoding())

a_list = ['사과', '배', '감']
print(a_list[1])
a_list.append('포도')
print(a_list)

a_dic = {
    'name': 'bob',
    'age': 27}

print(a_dic['name']);


def sum(a, b):
    print('더하자')
    return a + b


result = sum(1, 2)
print(result)


def is_adult(age):
    if age > 20:
        print('성인')
    else:
        print('청소년')


is_adult(25)

# 리스트 예제
fruits = ['사과', '배', '배', '감', '수박', '귤', '딸기', '사과', '배', '수박']

count = 0
for fruit in fruits:
    if fruit == '사과':
        count += 1

print('count: ', count)

# 딕셔너리 예제


people = [{'name': 'bob', 'age': 20},
          {'name': 'carry', 'age': 38},
          {'name': 'john', 'age': 7},
          {'name': 'smith', 'age': 17},
          {'name': 'ben', 'age': 27}]

for person in people:
    if person['age'] > 20:
        print('printOverage20', person['name'])






ычислитель отличий
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:

Поддержка разных входных форматов: yaml, json Генерация отчета в виде plain text, stylish и json

Установка
Установите Node.js последней версии в систему глобально (Установка JavaScript).
Склонируйте созданный репозиторий проекта локально.
Выполнить установку зависимостей (make install)
Запустить сравнение файлов (команды в описании)
Описание
Вычислить различия можно с помощью команды

gendiff [options] pathToFile1 pathToFile2

Options: -V, --version output the version number -f, --format [type] Output format -h, --help output usage information

[type] - plain, json, nested - путь к json или yaml файлам
Примеры
https://asciinema.org/a/JxYhEmRR5IpxuzF84QnJJjJtk - flat json/yml https://asciinema.org/a/6ujXPV6nAvU09vjLF3zj4vcgX - nested json/yml https://asciinema.org/a/c3GJd0azHzWUBw6Ju57xYfqcm - plain json/yml https://asciinema.org/a/bvI0TJWbLXceG45PAJkQPTtaZ - json json/yml
### Hexlet tests and linter status:
[![Actions Status](https://github.com/ILYA9090/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ILYA9090/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d8044902f1e1a9415491/maintainability)](https://codeclimate.com/github/ILYA9090/frontend-project-46/maintainability)


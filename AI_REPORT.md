# AI Usage Report - Laboratory Work №3

**Student:** Яппаров Эмир
**Date:** 31.01.2026

## 1. Tools Used
- Google DeepMind Antigravity (Agentic AI Coding Assistant)

## 2. Prompts Used
- "Напиши какие задачи предстоит выполнить в данной лабораторной"
- "Как мне создать данный компонент? Помоги мне научиться это делать, объясни концепцию и синтаксис"
- "Сделай в простом тоне, не профессиональном а понятном"
- "Запуш проект на мой гитхаб и напиши и создай текстовый документ с ссылкой на него"

## 3. Modifications and Verification
- AI helped structure the project into `task1/` and `task2/` folders as required.
- Logic for `useEffect` with `AbortController` was generated and verified for memory leaks.
- Independent state management for multiple `StepCounter` instances was implemented.
- The code was manually reviewed to ensure it follows the lab rubric (props, state, cleanup).

## 4. What I Learned
- I learned how to use `destructuring` in React props to avoid receiving the entire props object as the first argument.
- I understood the importance of `AbortController` in `useEffect` to prevent memory leaks and updates on unmounted components.
- I learned how to maintain an immutable history state using the spread operator `[...]`.
- I understood how to compose complex applications by nesting components (CounterApp -> StepCounter).

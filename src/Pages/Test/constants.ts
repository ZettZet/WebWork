import { OneQuestion } from './types'

export const test: OneQuestion[] = [
	{
		question: 'В каком году УГАТУ и БашГУ объединились?',
		possibleAnswers: ['2021', '2022', '2000', '1917'],
		correctAnswers: '2022'
	},
	{
		question: 'Кто проживает на дне океана?',
		possibleAnswers: ['Губка Боб', 'Сэнди', 'Камень'],
		correctAnswers: ['Губка Боб', 'Сэнди'],
		multipleAnswer: true
	},
	{
		question: 'Какие задания по предмету СовКомТех являются специальными?',
		possibleAnswers: [
			'Home Page',
			'Слайды',
			'Калькулятор',
			'Японский календарь',
			'Тест',
			'Движение точки по кругу/эллипсу',
			'Корзина'
		],
		correctAnswers: ['Японский календарь', 'Движение точки по кругу/эллипсу'],
		multipleAnswer: true
	},
	{
		question: 'Вы принимаете лицензионное соглашение?',
		possibleAnswers: ['Да', 'Нет'],
		correctAnswers: 'Нет'
	},
	{
		question: 'В WarCraft III есть панды?',
		possibleAnswers: ['Да', 'Нет'],
		correctAnswers: ['Да', 'Нет'],
		multipleAnswer: true
	}
]

import ErrorRepository from '../errorRepository';

const Error = new ErrorRepository();
Error.errors.set(404, 'Not Found');
Error.errors.set(500, 'Internal Server Error');
Error.errors.set(400, 'Bad Request');
Error.errors.set(522, 'Превышен таймаут');

test('error in base', () => {
  expect(Error.translate(500)).toBe('Internal Server Error');
});

test('should return "Unknown error" for empty code ', () => {
  expect(Error.translate()).toBe('Unknown error');
});

test('should return "Unknown error" for code "200', () => {
  expect(Error.translate(200)).toBe('Unknown error');
});

test('should return "Превышен таймаут" for code "522', () => {
  expect(Error.translate(522)).toBe('Превышен таймаут');
});
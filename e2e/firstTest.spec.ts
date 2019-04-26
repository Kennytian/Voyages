import { expect, device, element, by } from 'detox';

// Verify that we can use TypeScript constructs
function reverse(text?: string) {
  if (text) {
    return text
      .split('')
      .reverse()
      .join('');
  }
  return '';
}

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show myButton screen after tap', async () => {
    await element(by.id('MyUniqueId123')).tap();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });

  it('should reverse text in text input', async () => {
    const input = 'abcdefghijklmnopqrstuvwxyz';
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(input);
    await expect(element(by.id('reversedText'))).toHaveText(reverse('abcdefghijklmnopqrstuvwxyz'));
  });
});

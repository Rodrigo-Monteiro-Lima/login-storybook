import { Meta, StoryObj } from '@storybook/react'
import SignIn from './SignIn'
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {},
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)
    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'rodrigo@test.com.br');
    userEvent.type(canvas.getByPlaceholderText('******'), '123456789');
    userEvent.click(canvas.getByRole('button'));
    await waitFor(() => expect(canvas.getByText('Login realizado!')).toBeInTheDocument()); 
  }

}
// src/utils/generators.ts

import { customAlphabet } from 'nanoid';

/**
 * Gera um código de compartilhamento (share_code) único.
 * * Que usa apenas números (0-9) e tem 6 dígitos.
 * * Ex: "458901"
 */
export const generateShareCode = () => {
  // definindo numeros que poderam ser usados na sequancis do codigo
  const alphabet = '0123456789';
  
  // Configura o nanoid para usar esse numeros e ter 6 caracteres
  const nanoid = customAlphabet(alphabet, 6);
  
  return nanoid();
};

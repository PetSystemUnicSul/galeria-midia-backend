// src/utils/generators.ts

import { customAlphabet } from 'nanoid';

/**
 * Gera um código de compartilhamento (share_code) único.
 * * Que usa apenas números (0-9) e tem 5 dígitos.
 * * Ex: "45890"
 */
export const generateShareCode = () => {
  // definindo numeros que poderam ser usados na sequancis do codigo
  const alphabet = '0123456789';
  
  // Configura o nanoid para usar esse numeros e ter 5 caracteres
  const nanoid = customAlphabet(alphabet, 5);
  
  return nanoid();
};

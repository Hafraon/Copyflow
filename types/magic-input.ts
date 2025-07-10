export type InputType = 'text' | 'url' | 'file' | null;

export interface ParsedProduct {
  name: string;
  price?: string;
  description?: string;
  url?: string;
  image?: string;
  category?: string;
}

export interface MagicInputState {
  inputValue: string;
  inputType: InputType;
  isProcessing: boolean;
  error: string | null;
  parsedData: ParsedProduct[];
  selectedProducts: Set<number>;
  showPreview: boolean;
  fileProgress: number;
  platform: string;
}

export type MagicInputAction =
  | { type: 'SET_INPUT_VALUE'; payload: string }
  | { type: 'SET_INPUT_TYPE'; payload: InputType }
  | { type: 'SET_PROCESSING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_PARSED_DATA'; payload: ParsedProduct[] }
  | { type: 'SET_SELECTED_PRODUCTS'; payload: Set<number> }
  | { type: 'SET_SHOW_PREVIEW'; payload: boolean }
  | { type: 'SET_FILE_PROGRESS'; payload: number }
  | { type: 'SET_PLATFORM'; payload: string }
  | { type: 'RESET_STATE' };

export const initialMagicInputState: MagicInputState = {
  inputValue: '',
  inputType: null,
  isProcessing: false,
  error: null,
  parsedData: [],
  selectedProducts: new Set(),
  showPreview: false,
  fileProgress: 0,
  platform: 'universal'
};

export function magicInputReducer(state: MagicInputState, action: MagicInputAction): MagicInputState {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    case 'SET_INPUT_TYPE':
      return { ...state, inputType: action.payload };
    case 'SET_PROCESSING':
      return { ...state, isProcessing: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_PARSED_DATA':
      return { ...state, parsedData: action.payload };
    case 'SET_SELECTED_PRODUCTS':
      return { ...state, selectedProducts: action.payload };
    case 'SET_SHOW_PREVIEW':
      return { ...state, showPreview: action.payload };
    case 'SET_FILE_PROGRESS':
      return { ...state, fileProgress: action.payload };
    case 'SET_PLATFORM':
      return { ...state, platform: action.payload };
    case 'RESET_STATE':
      return initialMagicInputState;
    default:
      return state;
  }
}
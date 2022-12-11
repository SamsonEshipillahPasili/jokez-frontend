import { useState } from "react";

export interface AsyncState<T> {
    data: T | null
    loading: boolean
    error: string | null
}

export function useAsyncLoader<T>() {
    const initialState: AsyncState<T> = {
        data: null,
        loading: false,
        error: null
    }
    const [state, setState] = useState<AsyncState<T>>(initialState);

    const loader = async (callback: () => Promise<T>) => {
        if (state.loading) {
            return;
        }
        setState({loading: true, error: null, data: null})
        try {
            const result = await callback();
            setState({loading: false, error: null, data: result})
        } catch (e: any) {
            const msg = e.message || 'There was an error';
            setState({loading: false, error: msg, data: null})
        }
    };

    return {state, loader};
}

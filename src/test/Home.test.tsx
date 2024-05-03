import React from 'react';
import { render, waitFor, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { useFetchItems } from '../hooks/useFetchPlants';
import { usePlantFilter } from '../hooks/usePlantFilter';
import { IPlant } from '../interfaces/plant.interface';
import { act } from 'react-dom/test-utils';
import Home from '../pages/Home';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../hooks/useFetchItems');
jest.mock('../hooks/useFilter');

// Datos para falsear
const mockData: IPlant[] = [
    {
        id: '1',
        name: 'Plant 1',
        binomialName: 'test',
        price: 5,
        imgUrl: 'https://dulces-petalos.herokuapp.com/images/ophrysTenthredinifera.jpeg',
        wateringsPerWeek: 2,
        fertilizerType: 'test',
        heightInCm: 20,
    },
    {
        id: '2',
        name: 'Plant 1',
        binomialName: 'test',
        price: 5,
        imgUrl: 'https://dulces-petalos.herokuapp.com/images/ophrysTenthredinifera.jpeg',
        wateringsPerWeek: 2,
        fertilizerType: 'test',
        heightInCm: 20,
    },
];

test('renders Home component and displays catalog with fetched items', async () => {
    // Falsear useFetchItems
    (useFetchItems as jest.Mock).mockReturnValue({
        items: mockData,
        errorFetch: false,
        loading: false,
    });

    // Falsear useFilter
    (usePlantFilter as jest.Mock).mockReturnValue({
        filterItems: jest.fn(),
        filteredItems: mockData,
    });

    const { getByText } = render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    await act(async () => {
        await waitFor(() => {
            expect(getByText('Catálogo')).toBeInTheDocument();
        });
    });
});

// { id: 1, name: 'Plant 1', binomialName:'test', price: 5, imgUrl: 'https://dulces-petalos.herokuapp.com/images/ophrysTenthredinifera.jpeg', wateringsPerWeek: 2, fertilizerType: 'test', heightInCm:20 },
// { id: 2, name: 'Plant 1', binomialName:'test', price: 5, imgUrl: 'https://dulces-petalos.herokuapp.com/images/ophrysTenthredinifera.jpeg', wateringsPerWeek: 2, fertilizerType: 'test', heightInCm:20 }

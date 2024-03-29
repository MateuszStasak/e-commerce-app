import React from 'react'
import { render } from '@testing-library/react'

import Page from '../app/[lang]/page'
import { gql } from '../data-access/graphql-client'

gql.GetUsers = jest.fn().mockResolvedValue({ users: [] })

describe('Index', () => {
  it('should render successfully', async () => {
    const { baseElement } = render((await Page()) as unknown as React.ReactElement)
    expect(baseElement).toBeTruthy()
  })
})

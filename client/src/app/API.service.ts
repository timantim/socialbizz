/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation } from '@aws-amplify/api';
import { GraphQLResult } from '@aws-amplify/api/lib/types';
import { Observable } from 'zen-observable-ts';

export type CreateSocialAccountInput = {
  id?: string | null;
  username: string;
  apiKey?: string | null;
};

export type ModelSocialAccountConditionInput = {
  username?: ModelStringInput | null;
  apiKey?: ModelStringInput | null;
  and?: Array<ModelSocialAccountConditionInput | null> | null;
  or?: Array<ModelSocialAccountConditionInput | null> | null;
  not?: ModelSocialAccountConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateSocialAccountInput = {
  id: string;
  username?: string | null;
  apiKey?: string | null;
};

export type DeleteSocialAccountInput = {
  id?: string | null;
};

export type ModelSocialAccountFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  apiKey?: ModelStringInput | null;
  and?: Array<ModelSocialAccountFilterInput | null> | null;
  or?: Array<ModelSocialAccountFilterInput | null> | null;
  not?: ModelSocialAccountFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateSocialAccountMutation = {
  __typename: 'SocialAccount';
  id: string;
  username: string;
  apiKey: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSocialAccountMutation = {
  __typename: 'SocialAccount';
  id: string;
  username: string;
  apiKey: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSocialAccountMutation = {
  __typename: 'SocialAccount';
  id: string;
  username: string;
  apiKey: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetSocialAccountQuery = {
  __typename: 'SocialAccount';
  id: string;
  username: string;
  apiKey: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSocialAccountsQuery = {
  __typename: 'ModelSocialAccountConnection';
  items: Array<{
    __typename: 'SocialAccount';
    id: string;
    username: string;
    apiKey: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateSocialAccountSubscription = {
  __typename: 'SocialAccount';
  id: string;
  username: string;
  apiKey: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSocialAccountSubscription = {
  __typename: 'SocialAccount';
  id: string;
  username: string;
  apiKey: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSocialAccountSubscription = {
  __typename: 'SocialAccount';
  id: string;
  username: string;
  apiKey: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  async CreateSocialAccount(
    input: CreateSocialAccountInput,
    condition?: ModelSocialAccountConditionInput
  ): Promise<CreateSocialAccountMutation> {
    const statement = `mutation CreateSocialAccount($input: CreateSocialAccountInput!, $condition: ModelSocialAccountConditionInput) {
        createSocialAccount(input: $input, condition: $condition) {
          __typename
          id
          username
          apiKey
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <CreateSocialAccountMutation>response.data.createSocialAccount;
  }
  async UpdateSocialAccount(
    input: UpdateSocialAccountInput,
    condition?: ModelSocialAccountConditionInput
  ): Promise<UpdateSocialAccountMutation> {
    const statement = `mutation UpdateSocialAccount($input: UpdateSocialAccountInput!, $condition: ModelSocialAccountConditionInput) {
        updateSocialAccount(input: $input, condition: $condition) {
          __typename
          id
          username
          apiKey
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <UpdateSocialAccountMutation>response.data.updateSocialAccount;
  }
  async DeleteSocialAccount(
    input: DeleteSocialAccountInput,
    condition?: ModelSocialAccountConditionInput
  ): Promise<DeleteSocialAccountMutation> {
    const statement = `mutation DeleteSocialAccount($input: DeleteSocialAccountInput!, $condition: ModelSocialAccountConditionInput) {
        deleteSocialAccount(input: $input, condition: $condition) {
          __typename
          id
          username
          apiKey
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <DeleteSocialAccountMutation>response.data.deleteSocialAccount;
  }
  async GetSocialAccount(id: string): Promise<GetSocialAccountQuery> {
    const statement = `query GetSocialAccount($id: ID!) {
        getSocialAccount(id: $id) {
          __typename
          id
          username
          apiKey
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <GetSocialAccountQuery>response.data.getSocialAccount;
  }
  async ListSocialAccounts(
    filter?: ModelSocialAccountFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSocialAccountsQuery> {
    const statement = `query ListSocialAccounts($filter: ModelSocialAccountFilterInput, $limit: Int, $nextToken: String) {
        listSocialAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            apiKey
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <ListSocialAccountsQuery>response.data.listSocialAccounts;
  }
  OnCreateSocialAccountListener: Observable<OnCreateSocialAccountSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSocialAccount {
        onCreateSocialAccount {
          __typename
          id
          username
          apiKey
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateSocialAccountSubscription>;

  OnUpdateSocialAccountListener: Observable<OnUpdateSocialAccountSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSocialAccount {
        onUpdateSocialAccount {
          __typename
          id
          username
          apiKey
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateSocialAccountSubscription>;

  OnDeleteSocialAccountListener: Observable<OnDeleteSocialAccountSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSocialAccount {
        onDeleteSocialAccount {
          __typename
          id
          username
          apiKey
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteSocialAccountSubscription>;
}

// CommentForm Component:

import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import {
  Flex,
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Label,
  Spinner
} from 'theme-ui'
import Button from '../ui/Button'

import Icon from '../Icons'

import { CREATE_COMMENT } from '../../gql/mutation'
import { GET_COMMENTS_BY_SLUG } from '../../gql/query'
import { useIdentityContext } from 'react-netlify-identity-widget'

// ___________________________________________________________________

type Props = {
  slug: string
}

const NAME_FIELD = 'name'
const COMMENT_FIELD = 'comment'

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Please enter your name'),
  comment: Yup.string()
    .min(3, 'Comment must be at least 3 characters')
    .required('Please enter a comment')
})

const CommentForm: React.FC<Props> = ({ slug }) => {
  const { isLoggedIn, user }: any = useIdentityContext()
  const initialValues = {
    name: user?.user_metadata.full_name,
    comment: ''
  }

  const [isFormSent, setIsFormSent] = useState(false)
  const [isFormError, setIsFormError] = useState(false)
  const [createComment, { loading, error }] = useMutation(CREATE_COMMENT)

  return (
    <S.CommentForm>
      <Heading
        as="h4"
        sx={{ fontFamily: `Rubik`, mb: 4 }}
        className="text--md  text--uppercase"
      >
        Leave a comment
      </Heading>

      {!isLoggedIn ? (
        <Box sx={{ border: theme.border, p: 4 }}>
          <Text sx={{ textTransform: 'uppercase' }}>
            Please log in or sign up to comment.
          </Text>
        </Box>
      ) : (
        <Formik
          initialValues={initialValues}
          isSubmitting={loading}
          errors={error}
          validationSchema={schema}
          onSubmit={async (values, { resetForm }) => {
            await createComment({
              variables: {
                slug: `${slug}`,
                name: values.name,
                comment: values.comment
              },
              // Provide a fake response of the mutation response
              optimisticResponse: {
                createComment: {
                  __typename: 'Comment',
                  name: values.name,
                  comment: values.comment
                }
              },

              // update: (proxy, response) => {
              //   // Read the data from our cache for this query.
              //   const previousData = proxy.readQuery({
              //     query: GET_COMMENTS_BY_SLUG,
              //     variables: {
              //       slug: `${slug}`
              //     }
              //   })

              //   // Write our data back to the cache with the new todo in it
              //   proxy.writeQuery({
              //     query: GET_COMMENTS_BY_SLUG,
              //     variables: {
              //       slug: `${slug}`
              //     },
              //     data: {
              //       ...previousData,
              //       comments: [
              //         response.data.createComment,
              //         ...previousData.comments
              //       ]
              //     }
              //   })
              // },

              // Refetch queries after mutation finishes successfully
              refetchQueries: [
                {
                  query: GET_COMMENTS_BY_SLUG,
                  variables: {
                    slug: `${slug}`
                  }
                }
              ],
              // Wait for the refetched queries to be completed, before resolving the mutation
              awaitRefetchQueries: true
            })
              .then(() => {
                resetForm()
                setIsFormSent(true)
                setTimeout(() => {
                  setIsFormSent(false)
                }, 3000)
              })
              .catch(() => {
                setIsFormError(true)
              })
          }}
        >
          {({ isSubmitting, values, errors, dirty, handleChange }) => {
            return (
              <Form>
                <Field name={NAME_FIELD}>
                  {(field: any) => (
                    <Box
                      sx={{
                        mb: 2
                      }}
                    >
                      <Label labelFor={NAME_FIELD}>
                        Commenting as {user?.user_metadata.full_name}
                      </Label>
                      <Input
                        {...field}
                        name={NAME_FIELD}
                        placeholder="Enter your name"
                        value={user?.user_metadata.full_name}
                        onChange={handleChange}
                        type="hidden"
                      />
                      <ErrorMessage
                        name={NAME_FIELD}
                        render={() => (
                          <Text
                            as="small"
                            sx={{ color: 'error', position: 'absolute' }}
                          >
                            {errors.name}
                          </Text>
                        )}
                      />
                    </Box>
                  )}
                </Field>
                <Field name={COMMENT_FIELD}>
                  {(field: any) => (
                    <Box
                      sx={{
                        mb: 4
                      }}
                    >
                      <Label
                        labelFor={COMMENT_FIELD}
                        sx={{
                          display: 'none',
                          visibility: 'hidden'
                        }}
                      >
                        Your comment
                      </Label>
                      <Textarea
                        {...field}
                        name={COMMENT_FIELD}
                        rows={3}
                        placeholder="Enter your comment"
                        value={values.comment}
                        onChange={handleChange}
                        sx={{
                          p: 3,
                          mb: 2
                        }}
                      />
                      <ErrorMessage
                        name={COMMENT_FIELD}
                        render={() => (
                          <Text
                            as="small"
                            sx={{ color: 'red', position: 'absolute' }}
                          >
                            {errors.comment}
                          </Text>
                        )}
                      />
                    </Box>
                  )}
                </Field>

                <Flex
                  sx={{
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Button
                    as="button"
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !dirty ||
                      !!errors.name ||
                      !!errors.comment
                    }
                    className="btn"
                  >
                    {isSubmitting ? (
                      <>
                        processing...
                        <Spinner p={3} />
                      </>
                    ) : (
                      <>
                        Submit
                        <Icon name="carat" />
                      </>
                    )}
                  </Button>

                  <Box>
                    {isFormSent && (
                      <Text as="small" sx={{ color: 'primary' }}>
                        Great success!
                      </Text>
                    )}
                    {isFormError && (
                      <Text as="small" sx={{ color: 'red' }}>
                        Error, error, errorrrr.
                      </Text>
                    )}
                  </Box>
                </Flex>
              </Form>
            )
          }}
        </Formik>
      )}
    </S.CommentForm>
  )
}

export default CommentForm

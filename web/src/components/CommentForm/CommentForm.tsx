// CommentForm Component:

// ___________________________________________________________________

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

import { CREATE_COMMENT } from '../../gql/mutation'
import { useIdentityContext } from 'react-netlify-identity-widget'

// ___________________________________________________________________

type Props = {
  slug: string
}

const NAME_FIELD = 'name'
const COMMENT_FIELD = 'comment'

const initialValues = {
  name: '',
  comment: ''
}

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Please enter your name'),
  comment: Yup.string()
    .min(10, 'Comment must be at least 10 characters')
    .required('Please enter a comment')
})

const CommentForm: React.FC<Props> = ({ slug }) => {
  const { isLoggedIn, user }: any = useIdentityContext()
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
              }
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
                        value={values.name}
                        onChange={handleChange}
                        sx={{
                          display: 'none',
                          visibility: 'hidden'
                        }}
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
                            variant="styles.small"
                            sx={{ color: 'error', position: 'absolute' }}
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
                    justifyContent: 'flex-end'
                  }}
                >
                  <Box
                    sx={{
                      mr: 2
                    }}
                  >
                    {isFormSent && (
                      <Text
                        as="small"
                        variant="styles.small"
                        sx={{ color: 'primary' }}
                      >
                        Comment sent ok!
                      </Text>
                    )}
                    {isFormError && (
                      <Text
                        as="small"
                        variant="styles.small"
                        sx={{ color: 'red' }}
                      >
                        Ooops, there's been an error!
                      </Text>
                    )}
                  </Box>
                  <button
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
                        Submitting
                        <Spinner variant="styles.spinner" sx={{ ml: 3 }} />
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
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

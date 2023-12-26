import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { postValidation } from '../../lib/validation';
import { Textarea } from '@/components/ui/textarea';
import { PostFormTypes } from '@/types';

const PostForm = ({ post, action }: PostFormTypes) => {
  const form = useForm<z.infer<typeof postValidation>>({
    resolver: zodResolver(postValidation),
    defaultValues: {
      caption: '',
      file: [],
      location: '',
      tags: '',
    },
  });

  function onSubmit(values: z.infer<typeof postValidation>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 w'>
        <FormField
          control={form.control}
          name='caption'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Caption</FormLabel>
              <FormControl>
                <Textarea
                  className='shad-textarea'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='tags'
          render={({ field }) => (
            <FormItem>
              <FormLabel>tags</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type='button'>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  );
};
export default PostForm;

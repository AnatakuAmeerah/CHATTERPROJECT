import { ReplyData } from './replyData.types';
import { TimestampObject } from './timeStampObject.types';

export type CommentData = {
  commentId: string;
  value: string;
  createdAt: TimestampObject;
  edited?: boolean;
  editedAt?: TimestampObject;
  likes?: string[];
  userId: string;
  replies: {} | ReplyData[] | any;
};
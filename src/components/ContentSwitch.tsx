import React, { Children, FC, isValidElement, Key, ReactNode } from 'react';
import { isEmpty, isNil } from 'ramda';

export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export interface ContentSwitchChildProps {
  id: Key;
}

export interface ContentSwitchProps {
  /**
   * List of files to display in gallery.
   */
  activeId?: Key | Key[];
  /**
   * Content shown as an placeholder for a case of no activeId provided.
   */
  initialContent?: ReactNode;
  /**
   * Content shown as an placeholder for a case of activeId not matching any children ID.
   */
  notFoundContent?: ReactNode;
  children?: ReactNode;
}

export const ContentSwitch: FC<ContentSwitchProps> = ({
  activeId,
  children,
  initialContent,
  notFoundContent,
}) => {
  const listOfIds = toArray(activeId);

  // parse ids to string due to type consistency
  const activeStringIds = listOfIds
    .filter((currentId): currentId is Key => !isNil(currentId))
    .map((currentId) => currentId.toString());

  const arrayChildren = Children.toArray(children);

  // filter children by active ids - shows only children with ID matches activeId/s
  const filteredChildren = arrayChildren.filter(
    (child) =>
      isValidElement<ContentSwitchChildProps>(child) &&
      activeStringIds.includes(child?.props?.id?.toString() ?? '')
  );

  const content =
    filteredChildren.length > 0 ? filteredChildren : notFoundContent;

  // if no ids were provided return initialContent
  return <>{!isEmpty(activeStringIds) ? content : initialContent}</>;
};

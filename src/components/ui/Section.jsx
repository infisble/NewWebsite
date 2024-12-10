import React from 'react';
import clsx from 'clsx';
import { Container } from './Container';

export function Section({ children, className, id }) {
  return (
    <section id={id} className={clsx('py-20', className)}>
      <Container>{children}</Container>
    </section>
  );
}
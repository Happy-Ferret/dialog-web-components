/**
 * Copyright 2018 dialog LLC <info@dlg.im>
 * @flow
 */

import type { MessageMediaWebsite } from '@dlghq/dialog-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Image from '../Image/Image';
import Markdown from '../Markdown/Markdown';
import styles from './MessageMedia.css';

export type Props = {
  className?: string,
  media: MessageMediaWebsite
};

class MessageMediaWebpage extends PureComponent<Props> {
  renderTitle() {
    const { media: { content: { title } } } = this.props;

    if (!title) {
      return null;
    }

    return (
      <h4 className={styles.webpageTitle}>{title}</h4>
    );
  }

  renderDescription() {
    const { media: { content: { description } } } = this.props;

    if (!description) {
      return null;
    }

    return (
      <Markdown text={description} />
    );
  }

  renderImage() {
    const { media: { content: { image, title } } } = this.props;

    if (!image) {
      return null;
    }

    return (
      <Image
        className={styles.webpageImage}
        src={image.url}
        alt={title}
        width={image.width}
        height={image.height}
        maxWidth={200}
        maxHeight={100}
      />
    );
  }

  render() {
    const className = classNames(styles.container, styles.webpage, this.props.className);

    return (
      <blockquote className={className}>
        {this.renderTitle()}
        {this.renderDescription()}
        {this.renderImage()}
      </blockquote>
    );
  }
}

export default MessageMediaWebpage;

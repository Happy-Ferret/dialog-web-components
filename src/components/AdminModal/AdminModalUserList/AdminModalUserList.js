/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { GroupMember } from '@dlghq/dialog-types';
import type { SelectorState } from '../../../entities';
import React, { PureComponent } from 'react';
import styles from './AdminModalUserList.css';
import { AutoSizer } from 'react-virtualized';
import AdminModalUserListItem from './AdminModalUserListItem';
import SelectList from '../../SelectList/SelectList';

type Props = {
  selector: SelectorState<GroupMember>,
  onChange: (selector: SelectorState<GroupMember>) => mixed
};

class AdminModalUserList extends PureComponent<Props> {
  handleChange = (selector: SelectorState<GroupMember>) => {
    this.props.onChange(selector);
  };

  renderRow = ({ item, hovered }: *) => {
    return (
      <AdminModalUserListItem
        user={item}
        hovered={hovered}
      />
    );
  };

  render() {
    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <SelectList
            className={styles.container}
            width={width}
            itemHeight={51}
            itemVisibleCount={7}
            selector={this.props.selector}
            onChange={this.handleChange}
            renderItem={this.renderRow}
          />
        )}
      </AutoSizer>
    );
  }
}

export default AdminModalUserList;

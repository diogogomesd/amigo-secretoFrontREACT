import { Group } from '@/types/Group';
import { ItemButton } from '../ItemButton';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import * as api from '@/api/admin';

type Props = {
  item: Group;
  refreshAction: () => void;
  onEdit: (group: Group) => void;
};

export const GroupItem = ({ item, refreshAction, onEdit }: Props) => {
  const handleDeleteButton = async () => {
    confirm('Tem certeza que deseja deletar o grupo?');
    await api.deleteGroup(item.id_event, item.id);
    refreshAction();
  };

  return (
    <div className='border border-gray-700 bg-gary-900 rounded p-3 mb-3 flex items-center gap-2'>
      <div className='flex-1'>{item.name}</div>
      <div className='bg-blue-500 rounded-md'>
        <ItemButton
          IconElement={FaRegEdit}
          label='Editar'
          onClick={() => onEdit(item)}
        />
      </div>
      <div className='bg-red-500 rounded-md'>
        <ItemButton
          IconElement={FaRegTrashAlt}
          label='Excluir'
          onClick={handleDeleteButton}
        />
      </div>
    </div>
  );
};

export const GroupItemPlaceholder = () => {
  return (
    <div
      className='w-full h-16 border border-gray-500 rounded mb-3
          bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse
          '
    ></div>
  );
};
export const GroupItemNotFound = () => {
  return (
    <div className='text-center py-4 text-gray-500'>
      Não há grupo cadastrado neste evento
    </div>
  );
};

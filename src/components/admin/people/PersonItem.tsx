import { PersonComplete } from '@/types/PersonComplete';
import { ItemButton } from '../ItemButton';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import * as api from '@/api/admin';

type Props = {
  item: PersonComplete;
  refreshAction: () => void;
  oneEdit: (person: PersonComplete) => void;
};

export const PersonItem = ({ item, refreshAction, oneEdit }: Props) => {
  const handleButtonDelete = async () => {
    if (confirm('Tem certeza que deseja excluir essa pessoa?')) {
      await api.deletePerson(item.id_event, item.id_group, item.id);
    }
  };

  return (
    <div className='border border-gray-700 bg-gray-900 rounded mb-3 flex items-center gap-2'>
      <div className='flex-1'>
        {item.name} - (CPF:{item.cpf})
      </div>
      <ItemButton
        IconElement={FaRegEdit}
        onClick={() => oneEdit(item)}
        label='Editar'
        className='bg-blue-500 hover:bg-blue-400'
      />
      <ItemButton
        IconElement={FaRegTrashAlt}
        onClick={handleButtonDelete}
        label='Excluir'
        className='bg-red-500 hover:bg-red-400'
      />
    </div>
  );
};
export const PersonItemPlaceholder = () => {
  return (
    <div
      className='w-full h-16 border border-gray-500 rounded mb-3
          bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse
          '
    ></div>
  );
};
export const PersonItemNotFound = () => {
  return (
    <div className='text-center py-4 text-gray-500'>
      Não há pessoas neste grupo...
    </div>
  );
};
